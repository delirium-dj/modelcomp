# DeepSeek V4 Flash Vision Exp — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (2026-08-21 — DeepSeek's first experimental multimodal model in the V4 family)
- **Short description:** The V4-Flash architecture (284B total / 13B active sparse MoE, 1M context) plus visual modules and continued training — and the pitch is "vision at the Flash price with zero text loss": identical rate card to the text model, image input capped at **384 tokens per image** (images are resized to ~800×800 before tokenization, so a 2000×2000 and a 5000×5000 photo bill the same — measured 348 tokens), up to 600 images per request, and text-side agent/reasoning scores unchanged. On multimodal agent benchmarks it approaches Claude Opus 4.8 and beats it on 3 of 11 rows (ZeroBench Pass@5 35.0 vs 34.0; ApexBench 36.5 vs 39.4; Agents' Last Exam 27.3 vs 25.7). Practical caveat from developers: the 800×800 downscale quietly breaks dense OCR — tile small text before sending.
- **Provider / access:** DeepSeek API only (experimental; `-exp` makes no stability promise; DeepSeek's pricing page notes the legacy `deepseek-v4-flash-vision-exp` name is now served by V4.1-Flash), plus OpenRouter/DeepInfra/GMICloud/SiliconFlow/Novita.
- **Release:** 2026-08-21.
- **Context window:** 1,048,576 tokens; max output 384K; 2,500 concurrency (same as Flash, 5× Pro's).
- **Modalities:** Text and image in → text out; thinking on by default at effort `high` (costs 80 extra template tokens per call); JPEG/PNG/GIF/WebP via base64, URL or Files API.
- **Pricing (as of 2026-10-09):** identical to V4-Flash — off-peak $0.22/M input, $0.66/M output, $0.007 cache; peak $0.44/$1.32/$0.014; an image costs ~$0.0001–0.00015 (~11,800 images per dollar at peak input).
- **Architecture:** same sparse MoE as V4-Flash (13B active/284B), with vision encoder + aligner and DFlash/DFlash2 attention.

### Raw benchmarks found

Vendor (DeepSeek Harness minimal mode, max effort; V4-Flash-0731 / Opus-4.8 in parentheses):

Text agent capabilities:

- Terminal-Bench 2.1: **83.9** (82.7 / 85.0); NL2Repo: **57.7** (54.2 / 69.7); CyberGym: **75.3** (76.7 / 78.3)
- DeepSWE: **59.3** (54.4 / 58.0 — beats Opus 4.8); Toolathlon-Verified: **75.9** (70.3 / 76.2)
- DSBench-Hard: **63.6** (59.6 / 71.7); AutomationBench (Public): **25.7** (25.1 / 27.2)

Multimodal agent capabilities:

- ApexBench (Pass@1): **36.5** (26.2† / 39.4); Agents' Last Exam: **27.3** (25.2† / 25.7 — beats Opus 4.8)
- Chartography: **64.3** (Opus 4.8 65.0); ZeroBench (Pass@5): **35.0** (Opus 4.8 34.0)
- † the text-only V4-Flash ignores the multimodal elements on those two evals

Third-party:

- Artificial Analysis (OpenRouter, Max effort): Intelligence Index **34.8**; Coding Index **65.0**; Agentic Index **47.5**; GPQA Diamond **91.3%**; HLE **34.5%**; AA-LCR **81.3%**; τ-Bench Banking **41.0%**; GDPval-AA **52.4%**; CritPt 10.9%; SciCode **49.7%**; TB 2.1 **74.2%**; TB Hard; TB 4.0 12.1%; AA-Omniscience 38.6% accuracy / 8.5% non-hallucination
- LiveBench (AA): reasoning **85.40**, mathematics **87.81**, instruction following **70.96**
- OpenRouter AutoExacto: GPQA Diamond 87.9–91.2%, TAU-Bench 74.2–78.1% (auto-routing 88.0/75.4)
- Traictory average 50.4%; llmboard aggregate 72.57

### Normalized scores (1–100)

- **Tool use: 74/100.** Toolathlon-Verified 75.9%, TB 2.1 83.9% (74.2% independent), τ-Bench Banking 41.0% (vs Flash's ~26.7%), GDPval-AA 52.4% and AA Agentic Index 47.5% — a strong agentic profile from 13B active, held below the frontier band by AutomationBench 25.7% and the vendor-vs-independent TB gap.
- **Reasoning: 78/100.** GPQA Diamond 91.3% (AA) and LiveBench reasoning 85.4 / math 87.8 are upper-mid-band; HLE 34.5%, AA Intelligence Index 34.8 and Omniscience 8.5% non-hallucination cap it below the frontier tier.
- **Context window: 90/100.** A 1M-token window (same hybrid CSA+HCA attention as the rest of V4) with AA-LCR at 81.3% — genuinely strong long-context reasoning, just under the ≥98%-retrieval evidence the top band requires.
- **Multimodal: 82/100.** Text + image in → text out is the 75–90 band, near its top: ZeroBench Pass@5 35.0 (beats Opus 4.8), ApexBench 36.5 (vs Pro's 38.3), Chartography 64.3, and multimodal-agent scores approaching Opus 4.8 overall — with the documented 384-token/800×800 image ceiling as the structural limit (no video input).
- **Coding: 74/100.** DeepSWE 59.3% (ahead of Opus 4.8's 58.0 in the vendor table), TB 2.1 83.9%, NL2Repo 57.7%, SciCode 49.7% and AA Coding Index 65.0% — near-frontier agentic coding at 13B active; NL2Repo trails Opus 4.8 by 12 points.
- **Cost efficiency: 96/100.** Identical pricing to the text Flash tier ($0.22/$0.66 off-peak, images effectively free at ≤384 tokens) with 1M context and 2,500 concurrency — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier; the experimental status and text-only legacy-name retirement are the caveats.
- **Overall Score: 80/100.** Best-fit recommendation: the cheapest multimodal agent on the market — Opus-4.8-adjacent multimodal agent benchmarks, 91% GPQA and 1M context at $0.22/$0.66 with image input that costs a rounding error; experimental (`-exp`), image-only (no video), and the 800×800 resize means dense OCR needs tiling.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (DeepSeek HF model card + API vision/pricing docs, Artificial Analysis via OpenRouter, Ofox and Rohit Raj image-cost measurements, SeaWhale/Traictory/llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_1_Vision.md`, using the same headings.
