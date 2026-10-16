# Qwen 3.7 Max — findings by Cat Jam

- Source: Alibaba / Qwen 3.7 Max (`opencode/qwen-3-7-max`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's largest publicly available Qwen 3.7 flagship (initially text-only, later added multimodal June 8, 2026 snapshot). Large 1M-context reasoning/focus+best-in-series (before Qwen3.8-Max).
- **Provider / access:** Alibaba Cloud Model Studio (DashScope), QwenCloud; OpenAI/Anthropic-compatible. Text input and output; newer June 8 snapshots also image + video.
- **Release / knowledge:** May 31 snapshot (text-only preview) and June 8 multimodal snapshot (GA); knowledge cutoff not stated in sampled docs.
- **IDs:** `qwen3.7-max`; snapshots `qwen3.7-max-2026-05-20`, `qwen3.7-max-2026-06-08`.
- **Context window:** 1,048,576 tokens; max output 131,072. Verified (model doc).
- **Modalities:** Text (earliest May) → Text, image, video (June 8 snapshot); text output. Function calling, structured outputs, web search, prefix completion, context cache, batch. No audio.
- **Pricing (as of 2026-10-16):** International $2.50/$7.50 per 1M (cache hit $0.50/$0.25 (explicit read) etc) — tiered China/Global pricing details.
- **Architecture:** Qwen 3.7 Max — size not disclosed by Alibaba in docs; marketed as largest and most capable Qwen3.7 model. (No parameter disclosure in sampled docs.)

### Raw benchmarks found

From Qwen launch comparison tables and ofox.ai / TPS-style reports:

- Terminal-Bench 2.1: **74.5%** (reported vs Qwen 3.7 Plus 64.0 maybe? Use 74.5)
- SWE-bench Pro: **60.6%** (self-reported in Qwen 3.8 blog's table, not independent)
- DeepSWE 1.1: 21.6% (from table)
- FrontierSWE: 40.7
- MLS-Bench-Lite: 31.7
- PaperBench: 64.8
- AndroidBench: 56.5
- CoWorkBench: 64.6
- WideSearch: 75.2
- JobBench: 31.3
- SkillsBench: 61.2
- Agents' Last Exam: 11.8 / 31.1
- Automation-Bench: 14.2
- Toolathlon Verified: 49.7
- HLE (no tools): 41.4
- HLE w/ tools: 53.5
- GPQA Diamond: 92.4 (vendor table)
- IFBench: 79.1 (vendor)
- MRCR v2 256K: 86.7
- LongBench v2: 65.3
- MRCR? v2 256K 86.7 for 3.7 Max (vendor)
- OSWorld-Verified: ? not referenced in sampled table for 3.7; 3.8 Max table had 86.1. Use no exact. Mark not verified.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 74.5, SWE-Pro 60.6, Toolathlon 49.7, JobBench 31.3; okay but trails 3.8 Max/Opus 4.8.
- **Reasoning: 84/100.** GPQA 92.4, HLE 41.4/53.5, MRCR 86.7. Solid agentic reasoning.
- **Context window: 92/100.** 1M context, MRCR 86.7 at 256K. (Moving shadows? no.)
- **Multimodal: 85/100.** Text-only initially, but June 8+ supports image/video. No standardized multimodal benchmark in sampled table beyond general agent.
- **Coding: 82/100.** SWE-Pro 60.6, DeepSWE 21.6, TB2.1 74.5; strong gains in 3.8 (67.7/86.6).
- **Cost efficiency: 88/100.** $2.50/$7.50 standard (international), China $1.65/$4.95; bigger and costlier than 3.6, but strong enterprise coding.
- **Overall Score: 85/100.** Mean (82+84+92+85+82)/5 = 85.0 → reported 84. (Predecessor to Qwen3.8/3.8-Max.)

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Alibaba docs, Qwen 3.8 launch table comparing 3.7 Max, ofox); scores are normalized 1–100 interpretations. Many benchmarks are vendor-run (Claude Code harness) — see notes.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using same headings.
