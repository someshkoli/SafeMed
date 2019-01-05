pragma solidity 0.4.25;

contract Factory{
    mapping(address=>address) private _contracts;
    function createPatient(string _name, string _dob) public returns(address){
        address _new_patient = new Patient(_name, _dob ,msg.sender);
        _contracts[msg.sender] = _new_patient;
    }
    function createDoctor(string _docname) public {
        address _new_doctor = new Doctor(msg.sender, _docname);
        _contracts[msg.sender] = _new_doctor;
    }
    function login() public view returns(address){
        require(_contracts[msg.sender] != 0x0000000000000000000000000000000000000000);
        return _contracts[msg.sender];
    }
}

contract Patient{

    struct visit_record{
        string _docname;
        string _hospital;
        string _daignos;
        uint _time;
        string _datein;
        string _dateout;
    }
    struct hash{
        string _name;
        uint _time;
    }

    string public _name;
    string public _dob;
    address _patient;
    hash[] record;
    visit_record[] visit;
    mapping(address=>bool) _doctors;

    function Patient(string name,string dob, address patient)public{
        _name=name;
        _dob=dob;
        _patient=patient;
    }

    function upload_doc(string name)public{
        hash memory newhash=hash({
            _name:name,
            _time:now
        });
        record.push(newhash);
    }

    function add_record_visit(string docname,string hospital,string daignos,string datein,string dateout)public{
        visit_record memory newVisit=visit_record({
            _docname:docname,
            _hospital:hospital,
            _daignos:daignos,
            _datein:datein,
            _dateout:dateout,
            _time:now
        });
        visit.push(newVisit);
    }

    function get_record(uint index)public view restrict returns(
        string, string, string, uint, string, string
        ){
            return(
                visit[index]._docname,
                visit[index]._hospital,
                visit[index]._daignos,
                visit[index]._time,
                visit[index]._datein,
                visit[index]._dateout
                );
        }

    modifier restrict(){
        require((msg.sender == _patient) || _doctors[msg.sender]);
        _;
    }

    modifier restrict_patient(){
        require(msg.sender==_patient);
        _;
    }

    function adddoc(address _doc)public restrict_patient{
        _doctors[_doc]=true;
    }

}

contract Doctor{
    string _docname;
    address[] _patients;
    address _doctor;
    constructor(address doctor, string docname)public{
        _doctor = doctor;
        _docname = docname;
    }

    function addPatient(address patient_address) public {
        _patients.push(patient_address);
    }

}