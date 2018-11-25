export class RoleModel {
  roleId: number;
  roleName: string;
  ConsultarLimitRule?:boolean = false
  EditarLimitRule?:boolean= false
  CrearLimitRule?:boolean= false
  DeshabilitarLimitRule?:boolean= false
  HabilitarLimitRule?:boolean= false
  RollbacklastVersionLimitRule?:boolean= false
  AprobarLimitRule?:boolean= false
  PriorizarLimitRule?:boolean= false
  EditarUsuario?:boolean= false
  CrearUsuario?:boolean= false
  DeshabilitarUsuario?:boolean= false
  VariableManager?:boolean= false



  constructor(roleId?: number, roleName?: string,ConsultarLimitRule?:boolean,EditarLimitRule?:boolean,CrearLimitRule?:boolean,DeshabilitarLimitRule?:boolean,
              HabilitarLimitRule?:boolean,RollbacklastVersionLimitRule?:boolean,AprobarLimitRule?:boolean,PriorizarLimitRule?:boolean,EditarUsuario?:boolean,
              CrearUsuario?:boolean,DeshabilitarUsuario?:boolean,VariableManager?:boolean) {
    this.roleId = roleId;
    this.roleName = roleName;
    this.ConsultarLimitRule=ConsultarLimitRule;
    this.EditarLimitRule=EditarLimitRule;
    this.CrearLimitRule=CrearLimitRule;
    this.DeshabilitarLimitRule=DeshabilitarLimitRule;
    this.HabilitarLimitRule=HabilitarLimitRule;
    this.RollbacklastVersionLimitRule=RollbacklastVersionLimitRule;
    this.AprobarLimitRule=AprobarLimitRule;
    this.PriorizarLimitRule=PriorizarLimitRule;
    this.EditarUsuario=EditarUsuario;
    this.CrearUsuario=CrearUsuario;
    this.DeshabilitarUsuario=DeshabilitarUsuario;
    this.VariableManager=VariableManager;
  }
}
