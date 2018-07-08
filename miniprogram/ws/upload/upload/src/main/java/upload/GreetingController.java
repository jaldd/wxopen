package upload;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public String greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return counter.incrementAndGet() + ":" + String.format(template, name);
	}

	@RequestMapping("upload")
	public String upload(@RequestParam("file") MultipartFile[] file) throws IOException {
		long startTime = System.currentTimeMillis();
		if (null != file && file.length > 0) {
			// 遍历并保存文件
			for (MultipartFile files : file) {
				if (file != null) {
					// 取得当前上传文件的文件名称
					String fileName = files.getOriginalFilename();
					// 如果名称不为“”,说明该文件存在，否则说明该文件不存在
					// 本地上传图片方式
					System.out.println(fileName);
				}
			}
		} else {
			return "上传文件不能为空";
		}
		long endTime = System.currentTimeMillis();
		System.out.println("方法二的运行时间：" + String.valueOf(endTime - startTime) + "ms");
		return "success";
	}
}