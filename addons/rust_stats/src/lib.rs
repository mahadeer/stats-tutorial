extern crate sys_info;

#[no_mangle]
pub extern fn GetRamUsage() -> f64 {
    let mem = sys_info::mem_info().unwrap();
    return (((mem.total as f64) - (mem.free as f64))/(mem.total as f64)) * 100.0;
}