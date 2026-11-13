# Qwen 3.8 Flash — findings by Ernie 5.5 Flash

- Source: Qwen/Qwen3.8 Flash (`qwen3.8-flash` / `qwen-3.8-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (the managed production SKU; the open-weight checkpoint is Qwen3.8-Flash-Next)
- **Short description:** Alibaba's cost-efficiency Flash tier for the Qwen3.8 generation — an open-weight multimodal MoE (125B main model + 51B n-gram embeddings, 6B active) that previews the Qwen4 architecture. Aimed at high-volume coding, tool-driven workflows and office/co-working agents.
- **Provider / access:** Qwen Cloud / Model Studio (`qwen3.8-flash`, OpenAI-compatible), OpenRouter (`qwen/qwen3.8-flash`), Novita and other third-party hosts; open weights `Qwen/Qwen3.8-Flash-Next` on Hugging Face / ModelScope (Qwen Community 1.0).
- **Release / knowledge:** 2026-08-26; knowledge cutoff not published.
- **IDs:** `qwen3.8-flash` (managed), `Qwen/Qwen3.8-Flash-Next` (open checkpoint), `qwen/qwen3.8-flash` (OpenRouter).
- **Context window:** 262,144 native, extensible to 1,000,000 (managed SKU ships 1M by default; max output 131,072) — vendor model card + LLM Stats listing.
- **Modalities:** text / image / video in, text out; reasoning yes (thinking mode default, `reasoning_effort` xhigh/medium/low); tool calls yes; JSON mode via structured output.
- **Pricing (as of 2026-11-13):** $0.15 in / $0.016 cached / $0.47 out per 1M (Qwen Cloud ~1 RMB in / 3 RMB out; Novita $0.15/$0.016/$0.47).
- **Architecture:** MoE, 125B main + 51B n-gram embedding + 4B MTP (~180B safetensors total), 6B activated; 48 layers, hybrid Gated DeltaNet + Qwen Sparse Attention (512-block indexer budget), Gated Residual (4 branches), Muon+AdamW recipe; open weights under Qwen Community 1.0.

### Raw benchmarks found

> Vendor table from the `Qwen/Qwen3.8-Flash-Next` model card (Flash-Next column), which Qwen states is the checkpoint behind the managed Qwen3.8-Flash.

Agent / tool use:

- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: no verified public score found for this model
- Toolathlon Verified (Pass@1): **73.5** (vs 70.3 DeepSeek-V4-Flash, 67.1 Qwen3.8-27B)
- ClawEval-MM (multimodal tool use): **Pass@3 64.4 / Average 60.4** — beats Qwen3.7-Plus (57.4/60.1)
- OSWorld 2.0 (computer use): **Binary 19.4 / Partial 52.3**; AndroidWorld **84.5**
- CoWorkBench (long-horizon office): **73.9**; JobBench **55.7**; Agents' Last Exam Pass@1 24.3 / Score 51.2

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Claude-Opus-4.6 Max 91.3; DeepSeek-V4-Flash 90.8)
- HLE (judged by GPT-4o): **35.9%** (Opus 4.6 40.0)
- IFBench: **81.3** (Opus 4.6 62.5)
- MMLU / MMLU-Pro / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Pro: **62.5%** (vs 56.0 DeepSeek-V4-Flash, 53.4 Claude-Opus-4.6 Max)
- DeepSWE 1.1: **58.7** (vs 54.4 DeepSeek-V4-Flash)
- SWE-bench Multilingual: **81.0%**
- LiveCodeBench v6: **91.9%** (vs 90.6 DeepSeek-V4-Flash, 88.8 Opus 4.6)
- NL2Repo-Bench: **48.1** (DeepSeek-V4-Flash 54.2)
- SciCode: no verified public score found

Long context:

- 262,144 native / 1M extended (YaRN); no MRCR/RULER retrieval figure published; QSA indexer targets long-context latency rather than a retrieval score.

### Normalized scores (1–100)

- **Tool use: 88/100.** Toolathlon 73.5 and ClawEval-MM 60.4 avg lead the comparison set; OSWorld partial 52.3 and AndroidWorld 84.5 show real agentic breadth. Capped by missing TB2.1/GDPval rows.
- **Reasoning: 86/100.** GPQA 91.7% is frontier-level and HLE 35.9% is solid; IFBench 81.3 is best-in-table. HLE below Opus 4.6 (40.0) and no MMLU-Pro row cap it.
- **Context window: 88/100.** 262,144 native with 1M extension (managed default 1M, 131K output) — tier 200K–500K high band; no retrieval score at 1M so it stays below the 1M-native models.
- **Multimodal: 90/100.** text/image/video in, text out; MathVision 95.7 (with CI), CharXiv 90.6, RealWorldQA 88.5, LVBench 76.6 — full-coverage input with strong visual numbers.
- **Coding: 91/100.** LiveCodeBench 91.9% and SWE-bench Multilingual 81.0% lead the table; SWE-bench Pro 62.5% is frontier-adjacent. DeepSWE 58.7 and NL2Repo 48.1 (behind DeepSeek-V4-Flash) are the cap.
- **Cost efficiency: 97/100.** $0.15/$0.47 per 1M with frontier-adjacent quality — among the cheapest per capability point in this dataset.
- **Overall Score: 88.6/100.** Best fit for high-volume coding assistants, tool-driven agents and multimodal document work on a budget; only its mid-tier long-context depth and NL2Repo keep it from the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Qwen3.8-Flash-Next Hugging Face model card and its vendor benchmark table, Alibaba Cloud launch post, LLM Stats pricing/context listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.8-Flash-Next — Hugging Face model card (benchmark table)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Alibaba Releases Qwen3.8-Flash with Innovative Model Architecture — Alibaba Cloud](https://www.alibabacloud.com/blog/alibaba-releases-qwen3-8-flash-with-innovative-model-architecture-delivering-optimal-price-performance_603503)
  - [Qwen3.8 Flash: Benchmarks, Pricing & Context Window — LLM Stats](https://llm-stats.com/models/qwen3.8-flash)
  - [Qwen3.8 Flash Context Window — contextwindows.dev](https://contextwindows.dev/models/qwen3-8-flash)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.