package com.budwk.nb.sys.models;

import com.budwk.nb.commons.base.model.BaseModel;
import org.nutz.dao.DB;
import org.nutz.dao.entity.annotation.*;
import org.nutz.dao.interceptor.annotation.PrevInsert;

import java.io.Serializable;
import java.util.List;

/**
 * Created by wizzer on 2016/6/21.
 */
@Table("sys_menu")
@TableIndexes({@Index(name = "INDEX_SYS_MENU_PATH", fields = {"path"}, unique = true), @Index(name = "INDEX_SYS_MENU_PREM", fields = {"permission"}, unique = true)})
public class Sys_menu extends BaseModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Column
    @Name
    @Comment("ID")
    @ColDefine(type = ColType.VARCHAR, width = 32)
    @PrevInsert(els = {@EL("uuid()")})
    private String id;

    @Column
    @Comment("父级ID")
    @ColDefine(type = ColType.VARCHAR, width = 32)
    private String parentId;

    @Column
    @Comment("树路径")
    @ColDefine(type = ColType.VARCHAR, width = 100)
    private String path;

    @Column
    @Comment("菜单名称")
    @ColDefine(type = ColType.VARCHAR, width = 100)
    private String name;

    @Column
    @Comment("多语言标识符")
    @ColDefine(type = ColType.VARCHAR, width = 100)
    private String alias;

    @Column
    @Comment("资源类型")
    @ColDefine(type = ColType.VARCHAR, width = 10)
    private String type;

    @Column
    @Comment("菜单链接")
    @ColDefine(type = ColType.VARCHAR, width = 255)
    private String href;

    @Column
    @Comment("打开方式")
    @ColDefine(type = ColType.VARCHAR, width = 50)
    private String target;

    @Column
    @Comment("菜单图标")
    @ColDefine(type = ColType.VARCHAR, width = 50)
    private String icon;

    @Column
    @Comment("是否显示")
    @ColDefine(type = ColType.BOOLEAN)
    private boolean showit;

    @Column
    @Comment("是否禁用")
    @ColDefine(type = ColType.BOOLEAN)
    private boolean disabled;

    @Column
    @Comment("权限标识")
    @ColDefine(type = ColType.VARCHAR, width = 255)
    private String permission;

    @Column
    @Comment("菜单介绍")
    @ColDefine(type = ColType.VARCHAR, width = 255)
    private String note;

    @Column
    @Comment("排序字段")
    @Prev({
            @SQL(db= DB.MYSQL,value = "SELECT IFNULL(MAX(location),0)+1 FROM sys_menu"),
            @SQL(db= DB.ORACLE,value = "SELECT COALESCE(MAX(location),0)+1 FROM sys_menu")
    })
    private Integer location;

    @Column
    @Comment("有子节点")
    private boolean hasChildren;

    private List<Sys_menu> buttons;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public boolean isShowit() {
        return showit;
    }

    public void setShowit(boolean showit) {
        this.showit = showit;
    }

    public boolean isDisabled() {
        return disabled;
    }

    public void setDisabled(boolean disabled) {
        this.disabled = disabled;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Integer getLocation() {
        return location;
    }

    public void setLocation(Integer location) {
        this.location = location;
    }

    public boolean isHasChildren() {
        return hasChildren;
    }

    public void setHasChildren(boolean hasChildren) {
        this.hasChildren = hasChildren;
    }

    public List<Sys_menu> getButtons() {
        return buttons;
    }

    public void setButtons(List<Sys_menu> buttons) {
        this.buttons = buttons;
    }
}