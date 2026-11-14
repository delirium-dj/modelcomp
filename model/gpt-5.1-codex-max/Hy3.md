# GPT-5.1-Codex-Max — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GPT-5.1-Codex-Max is OpenAI's agentic-coding model (led by research scientist Noam Brown), released 2025-11 and made the default in Codex integrations, replacing GPT-5.1-Codex. Built on the GPT-5 architecture, it targets long-running, project-level software engineering and code completion. A "compression" mechanism preserves key context near the window limit, enabling continuous work across millions of tokens (internal tests exceeded 24h). It is OpenAI's first model specifically trained/optimized for Windows development, and offers medium / xhigh reasoning intensities. API opened to developers 2025-12-05; integrated into Cursor, GitHub Copilot, and Linear.

## Model card
| Field | Value |
|---|---|
| Vendor | OpenAI |
| Release | 2025-11 (API 2025-12-05) |
| Base | GPT-5 architecture |
| Context | Millions of tokens via compression mechanism |
| Modalities | Text/code (coding-focused) |
| Modes | medium / xhigh reasoning |
| Pricing | Same as standard GPT-5 |

## Raw benchmarks
- **Agent / Tool use:** Default Codex model; integrated with Cursor, Copilot, Linear; runs in strict sandbox with network disabled; emits detailed terminal logs and test citations.
- **Reasoning:** xhigh mode supports 24h+ continuous project work; thinking-token usage ~30% lower than predecessor at higher speed (+27–42%).
- **Coding:** SWE-bench Verified 77.9%; Terminal-Bench 2.0 58.1%.
- **Long context:** Compression mechanism sustains work across millions of tokens.

## Normalized scores
- **Tool use: 82/100.** Default agentic-coding model with deep tool/IDE integration.
- **Reasoning: 74/100.** xhigh mode; 24h+ continuous engineering reasoning.
- **Context window: 82/100.** Compression-enabled multi-million-token continuity.
- **Multimodal: 66/100.** Coding/text-focused; no multimodal emphasis.
- **Coding: 80/100.** SWE-bench Verified 77.9%, Terminal-Bench 58.1%.
- **Cost efficiency: 76/100.** Standard GPT-5 pricing (premium but not bespoke).
- **Overall Score: 76.8/100.** Mean of the five quality dims (82+74+82+66+80 = 384 / 5 = 76.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.1-Codex-Max/67466869
  - https://blog.csdn.net/weixin_42263486/article/details/155102449
  - https://baijiahao.baidu.com/s?id=1849295509761640852&wfr=spider&for=pc
  - https://www.cnblogs.com/yangykaifa/p/19591453
  - https://baijiahao.baidu.com/s?id=1849305026215150101&wfr=spider&for=pc
