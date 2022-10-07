const LogName = (function () {
    function MyObject(aname) {
        this.name = function () {
            console.log(aname);
        }
    }
    let _instance = null;
    return {
        getInstance: function (aName) {
            if (!_instance) {
                _instance = new MyObject(aName);
            }
            return _instance;
        }
    }
})();

const in1 = LogName.getInstance('Anshuman');
const in2 = LogName.getInstance('Bachchu');
in1.name();
in2.name();

function MemberFactory() {
    this.getInstance() = function (atype) {
        let instance = null;
        switch (atype) {
            case 'simple':
                instance = new SimpleMember();
                break;
            case 'advanced':
                instance = new AdvancedMember();
                break;
            default:
                instance = new SimpleMember();
        }
        return instance; l

    }
}

function SimpleMember() {
    this.type = 'simple';
}

function StandardMember() {
    this.type = 'standard';
}

function AdvancedMember() {
    this.type = 'advanced';
}