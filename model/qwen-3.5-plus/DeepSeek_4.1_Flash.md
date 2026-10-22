# Qwen 3.5 Plus — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.5 Plus (`qwen3.5-plus`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: the official HF card for the underlying **Qwen3.5-397B-A17B** (Plus = hosted tier of those weights) — **TAU2-Bench 86.7%**, **BFCL-V4 72.9%**, MCP-Mark 46.1, Tool Decathlon 38.3, BrowseComp 69.0/78.6, OSWorld-Verified 62.2%; **GPQA 88.4%**, MMLU-Pro 87.8%, HLE 28.7%, AIME26 91.3%, HMMT 92.7–94.8%; **SWE-bench Verified 76.4%**, SWE Multilingual 69.3%, LiveCodeBench v6 83.6%, SecCodeBench 68.3%, Terminal-Bench 2.0 52.5%; AA-LCR 68.7%, LongBench v2 63.2%; MMMU 85.0%, **MMMU-Pro 79.0%**, MathVista 90.3%. Independent Vals: TB 2.0 41.57%, SWE 71.2%, LCB 85.33%, GPQA 87.37%, MMLU-Pro 87.18%, **Finance Agent v1.1 #8 (#1 open-weight)**, **Vals Index 57.1% (#10 overall, #3 open-weight)**; BenchLM overall 47.65 (#106/891, only 4 benchmarks).
> **Conflicts surfaced:** (1) **MMMU-Pro** — **79.0% (official card) vs 22.77% (Vals, dead last, 0th pct)**; Vals itself attributes this to a "highly sensitive content filter" and strict-format failures. (2) **SWE-bench Verified** — 76.4% (HF) vs 71.20% (Vals). (3) **Terminal-Bench 2.0** — 52.5% (HF) vs 41.57% (Vals). (4) **Weights** — Plus is hosted/proprietary while the 397B-A17B sibling is Apache-2.0. (5) BenchLM's 47.65 overall covers only 4 of 626 benchmarks.
> **Adjusted dimension:** Tool 68→72 (official TAU2 86.7% / BFCL 72.9% newly surfaced); Overall 80 → **81**.
> Sources: https://huggingface.co/Qwen/Qwen3.5-397B-A17B · https://www.qwencloud.com/models/qwen3.5-plus · https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking · https://benchlm.ai/models/qwen3-5-plus

## Model card

- **Name:** Qwen 3.5 Plus (hosted tier of Qwen3.5-397B-A17B)
- **Short description:** The flagship commercial API tier of the Qwen3.5 native vision-language series — a 1M-context multimodal model whose top use-cases are coding, agents and build tasks; strong on knowledge and finance, weaker on deep legal/coding and on strict-format multimodal output.
- **Provider / access:** Alibaba Cloud (PAI-EAS/DashScope), OpenRouter. Plus itself is hosted/proprietary; the sibling open weights `Qwen/Qwen3.5-397B-A17B` are Apache-2.0.
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff not published.
- **IDs:** `qwen3.5-plus` (QwenCloud/OpenRouter); OpenCode Zen `opencode/qwen-3.5-plus`. No Zen Free ID.
- **Context window:** 1M context / 991K max input / max output 65K (QwenCloud); underlying 397B-A17B is 262,144 native, extensible to ~1M.
- **Modalities:** text, image and video in; text out (file input not supported). Reasoning yes (thinking default, `enable_thinking` toggle), tool use.
- **Pricing (as of 2026-10-11):** **$0.40 / $2.40 per 1M**, cache read $0.04 (QwenCloud + Vals).
- **Architecture:** sparse MoE — 397B total / 17B active (512 experts, 10 routed + 1 shared), 60 layers of hybrid Gated DeltaNet + gated attention, 201 languages.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **86.7%** (official); BFCL-V4 72.9%; MCP-Mark 46.1%; Tool Decathlon 38.3%; VITA-Bench 49.7%
- Terminal-Bench 2.0: **52.5% (official)** / **41.57% (Vals)**; BrowseComp 69.0% (simple) / 78.6% (discard-all); OSWorld-Verified 62.2%
- **Finance Agent v1.1 #8** (#1 open-weight, Vals); MCP-Atlas / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.4% (official) / 87.37% (Vals)**; MMLU-Pro 87.8% (official) / 87.18% (Vals); HLE 28.7%; LegalBench 85.10% (#25/150)
- AIME 2026 91.3%; HMMT 94.8% / 92.7%; SuperGPQA 70.4%; FrontierMath v2 Tier 4 2.08%
- Vals Index 57.1% (#10 overall, #3 open-weight); BenchLM overall 47.65 (#106/891, 4 benchmarks only)

Coding:

- SWE-bench Verified: **76.4% (official) / 71.20% (Vals)**; SWE Multilingual 69.3%; LiveCodeBench v6 83.6% / 85.33% (Vals)
- SecCodeBench 68.3%; Vibe Code Bench v1.1 15.74%; SciCode / DeepSWE: **no verified public score found**

Long context:

- AA-LCR **68.7%**; LongBench v2 63.2%; no MRCR/RULER retention curve published; 1M window (991K measured).

Multimodal:

- MMMU 85.0%; **MMMU-Pro 79.0% (official) / 22.77% (Vals outlier)**; MathVista 90.3%; OmniDocBench v1.5 90.8%; Video-MME 87.5%; OSWorld-Verified 62.2%.

### Normalized scores (1–100)

- **Tool use: 72/100.** Official TAU2-Bench 86.7%, BFCL-V4 72.9% and a #8 Finance Agent v1.1 place (raised from 68, which rested only on the weak Vals TB 2.0); capped by Vals TB 2.0 41.57% and the missing GDPval/OSWorld-harness rows.
- **Reasoning: 82/100.** GPQA 87.4–88.4% and MMLU-Pro 87.2–87.8% are strong and AIME 91.3% is high; HLE 28.7% is mid, capping it below the frontier band.
- **Context window: 95/100.** 1M context (991K measured) is the ≥1M tier; held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 78/100.** Text, image **and video** input with text output (`+video = 75–90`), backed by MMMU 85.0% and Video-MME 87.5%; the Vals MMMU-Pro 22.77% is a documented content-filter/format artefact against the official 79.0%.
- **Coding: 76/100.** SWE-bench Verified 71.2–76.4% and LiveCodeBench 83.6–85.3% are solid mid-tier; Vibe Code Bench 15.74% and TB 2.0 41.6–52.5% hold it back.
- **Cost efficiency: 93/100.** $0.40 / $2.40 per 1M with a $0.04 cache read is budget pricing for an open-weight-family 1M-context multimodal model.
- **Overall Score: 81/100.** (72 + 82 + 95 + 78 + 76) / 5 = 80.6 → 81. Best fit: cheap 1M-context multimodal agent/coding work where strict-format vision tasks are not critical.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Hugging Face Qwen3.5-397B-A17B card, QwenCloud model page, Vals AI, BenchLM, Digital Applied). The Vals MMMU-Pro outlier is documented against the official value rather than adopted; the SWE/TB spreads and the weights distinction are surfaced. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6.md`, using the same headings.
