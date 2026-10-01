# Qwen 3.5 9B — findings by GLM 5.3

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-9B`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** Alibaba Qwen Team's 9B open-weights multimodal foundation model (Apache-2.0): unified vision-language with text/image/video input, hybrid Gated DeltaNet + Gated Attention architecture, thinking mode, and strong tool-calling. Top use case: small self-hosted multimodal agent base with very broad language coverage.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-9B` (self-host via SGLang / vLLM / KTransformers / Transformers); Alibaba Cloud Model Studio (DashScope) OpenAI-compatible API; Together AI and other inference providers.
- **Release / knowledge:** released February 2026 (Qwen3.5 blog); knowledge cutoff not stated publicly
- **IDs:** `Qwen/Qwen3.5-9B` (self-host) / DashScope `qwen3.5-9b` (no OpenCode Zen ID found as of 2026-10-01)
- **Context window:** 262,144 natively; extensible to 1,010,000 tokens via YaRN RoPE scaling (verified on the official model card; YaRN can degrade shorter-context performance)
- **Modalities:** text + image + video in; text out; thinking on by default (`enable_thinking` toggle; no `/think` soft switch); tool calls (Qwen-Agent, Qwen Code, MCP, `qwen3_coder` parser); 201 languages/dialects
- **Pricing (as of 2026-10-01):** free open weights (Apache-2.0, commercial use permitted) — self-host compute cost only; hosted API pricing varies by provider (DashScope per-token price not verified in this pass)
- **Architecture:** 9B causal LM with vision encoder (~10B safetensors incl. encoder); 32 layers, hybrid layout 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)); multi-token prediction (MTP) support; padded 248K vocab

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **27.0%** avg@1 (third-party measurement: Xiaomi MiMo-V2.6 technical report base-model column)
- Tau3-Banking / Tau2-Bench: TAU2-Bench **79.1%** (vendor card, official setup with airline-domain fixes)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon-Verified: **25.9%** avg@1 (Xiaomi MiMo-V2.6 report base column); AutomationBench v1.0.6: **5.0%** (same source)
- BFCL-V4: **66.1%** (vendor card); VITA-Bench **29.8%**; DeepPlanning **18.0%** (vendor card)
- Visual agent: OSWorld-Verified **41.8%**, AndroidWorld **57.8%**, ScreenSpot Pro **65.2%** (vendor card)

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (vendor card + HF eval-results)
- HLE: **no verified public score found**
- LCR / MLCR: AA-LCR **63.0%**; LongBench v2 **55.2%** (vendor card)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (aggregators not covered in this pass)
- MMLU-Pro: **82.5%**; MMLU-Redux **91.1%**; SuperGPQA **58.2%**; C-Eval **88.2%** (vendor card)
- HMMT Feb 25: **83.2%**; HMMT Nov 25: **82.9%** (vendor card)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **60.0%** avg@3 (Xiaomi MiMo-V2.6 report base-model column); SWE-bench Pro: **32.0%** (same source)
- LiveCodeBench: **65.6%** (v6, vendor card); OJBench: **29.2%** (vendor card)
- SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR **63.0%** and LongBench v2 **55.2%** at native 262K (vendor card); YaRN extension to 1.01M documented but no retrieval-quality score published at that length.

Multimodal (vendor card):

- MMMU **78.4%** / MMMU-Pro **70.1%**; MathVision **78.9%**; Mathvista(mini) **85.7%**; VlmsAreBlind **93.7%**; V* **90.1/88.5%**
- Video: VideoMME(w sub) **84.5%**; MLVU **84.4%**; LVBench **70.0%**; VideoMMMU **78.9%**; MVBench **74.4%**
- OCR/docs: OmniDocBench1.5 **87.7%**; OCRBench **89.2%**; CC-OCR **79.3%**
- Tool-integrated image reasoning: TIR-Bench **45.6/31.9%** (with/without CI)

### Normalized scores (1–100)

- **Tool use: 62/100.** TAU2-Bench 79.1% and BFCL-V4 66.1% are excellent for 9B, and the visual-agent trio (OSWorld-Verified 41.8%, AndroidWorld 57.8%, ScreenSpot Pro 65.2%) is solid, but Terminal-Bench 2.1 27.0%, Toolathlon 25.9%, and AutomationBench 5.0% cap long-horizon/terminal agentic work.
- **Reasoning: 70/100.** GPQA Diamond 81.7% and HMMT ~83% are near-frontier for the size class, with strong knowledge coverage (MMLU-Pro 82.5%, C-Eval 88.2%); capped by mid long-context reasoning (AA-LCR 63%) and a 9B ceiling.
- **Context window: 72/100.** 262,144 native sits in the 200K–500K tier; the documented 1.01M YaRN extension is not scored as native (no retrieval measurement, known shorter-context degradation), and AA-LCR 63% / LongBench v2 55.2% are mid-tier.
- **Multimodal: 82/100.** Text + image + video in, text out with top-tier small-model vision (MMMU-Pro 70.1%, MathVision 78.9%, V* 90.1%) and strong video (VideoMME 84.5%, MLVU 84.4%) — upper video-in tier, capped by no audio input and text-only output.
- **Coding: 62/100.** LiveCodeBench v6 65.6%, SWE-bench Verified 60.0% (avg@3), and SWE Pro 32.0% are respectable 9B-class numbers but well below the frontier (LCB 90%+ / DeepSWE 74%+ refs); OJBench 29.2% caps competition-level coding.
- **Cost efficiency: 95/100.** Free Apache-2.0 open weights, self-hostable on a single modern GPU (with MTP speedups); near-free like other small open models, discounted slightly for self-host operational overhead.
- **Overall Score: 70/100.** (62 + 70 + 72 + 82 + 62) / 5 = 69.6 → 70. Best fit: self-hosted multimodal agent base (Qwen-Agent/Qwen Code) needing 201-language coverage and image/video understanding at 9B scale; escalate to larger models for terminal-heavy or frontier coding work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (official Qwen3.5 HF card, Qwen blog, Xiaomi MiMo-V2.6 technical report base-model column); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
