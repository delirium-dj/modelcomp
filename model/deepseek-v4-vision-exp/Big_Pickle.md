# DeepSeek-V4-Flash-Vision-Exp — findings by Big Pickle

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — the cheap V4-Flash agent brain given eyes. It adds image understanding to the Flash line at 384 tokens per image, keeping text-agent capability on par with V4-Flash while approaching Claude Opus 4.8 on multimodal agent benchmarks (vendor-reported).
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`, live Aug 21, 2026); minimal PyTorch inference + vision encoder released on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, MIT).
- **Release / knowledge:** 2026-08-21 (API changelog); weights/config Aug 31, 2026 on HF.
- **IDs:** `deepseek-v4-flash-vision-exp` (DeepSeek; open-weight reference implementation, experimental)
- **Context window:** 1,048,576 tokens input; max output 384K (OpenRouter lists 943.7K max completion through some routes).
- **Modalities:** text + image input; text output; max reasoning effort; agentic tool use; images capped at 384 tokens after ~800×800 downscale (up to 600 images/request, 8,192 px per side).
- **Pricing (as of 2026-09-20):** $0.22 in / $0.66 out per 1M (cached in $0.007); batch $0.11/$0.33 (AI Atlas/OpenRouter); launch reports also cited $0.14/$0.28 — verify current rate. Peak/off-peak windows apply.
- **Architecture:** 284B total / 13B active sparse MoE (43 layers, 256 routed experts, 6 selected/token) + 32-layer vision encoder, DFlash attention, Hyper-Connections, DSpark (LLMLearner/rohitraj); some listings show 304.6B total.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (DeepSeek, 2026-08); Terminal-Bench 4.0: **12.1%** (NanoGPT)
- Toolathlon-Verified: **75.9%** (DeepSeek)
- DSBench-Hard: **63.6%**; AutomationBench (Public): **25.7%** (DeepSeek)
- ApexBench (Pass@1): **36.5%** (DeepSeek); Agents' Last Exam: **27.3%**
- CyberGym: **75.3%** (DeepSeek)

Reasoning / knowledge:

- GPQA Diamond (legacy reference): **90.8%** (NanoGPT)
- MMMU / OCRBench / DocVQA / ChartQA / MathVista: improvements over V4-Flash reported by DeepSeek, **exact numbers not published**

Coding:

- DeepSWE v1.1: **59.3%** (DeepSeek; vs 58.0 Opus 4.8)
- NL2Repo: **57.7%** (DeepSeek; vs Opus 4.8 69.7)
- LiveBench Agentic Coding: **65.1%**; LiveBench Coding: **68.2%** (livebench.ai official board)
- SWE-bench Verified: **no verified public score found**

Long context:

- 1M window (DeepSeek/HF); dedicated MRCR/retrieval figure: **no verified public score found**

Multimodal:

- Chartography: **64.3%** (DeepSeek; vs 65.0 Opus 4.8); ZeroBench (Pass@5): **35.0%**
- ApexBench deliberately tests multimodal agent elements (DeepSeek); vision is 800×800-downscaled — dense OCR/small text degrades (rohitraj.tech)

### Normalized scores (1–100)

- **Tool use: 76/100.** TB 2.1 83.9% and Toolathlon 75.9% are strong; AutomationBench 25.7% and ALE 27.3% keep agentic breadth mid-tier.
- **Reasoning: 81/100.** GPQA ~90.8% (legacy, vendor-led) is solid; the experimental label and sparse independent confirmation cap it just below frontier.
- **Context window: 84/100.** Full 1M window with a huge 384K output; retrieval quality unverified for this checkpoint.
- **Multimodal: 70/100.** Real vision added at 384 tokens/image, but the 800×800 downscale loses dense small text (OCR-heavy use cases suffer) — a clear visual ceiling.
- **Coding: 73/100.** DeepSWE 59.3% edges Opus 4.8 and LiveBench coding ~68%; NL2Repo 57.7% trails the frontier by a clear margin.
- **Cost efficiency: 95/100.** $0.22/$0.66 with images at ~384 tokens each (≈$0.000085/image) makes bulk agentic-vision loops extraordinarily cheap.
- **Overall Score: 77/100.** Mean of the five quality dims (76+81+84+70+73)/5 = 76.8 → 77. A genuinely useful cheap-vision agent model — but it is an unverified, experimental checkpoint with a soft 800×800 cap on everything it sees.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 76 | 76 | — (no new evidence) |
| Reasoning | 81 | 81 | — (no new evidence) |
| Context window | 84 | 84 | — |
| Multimodal | 70 | 70 | — |
| Coding | 73 | 73 | — |
| Cost efficiency | 95 | 95 | — (last quoted price) |
| **Overall** | **77** | **77** | **—** |

**No public benchmark page exists for this model today.** BenchLM, Vals AI, Artificial Analysis and OpenRouter all return 404 for the ID and its obvious variants, and `deepseek-v4-vision-exp` is absent from the live `opencode` provider catalogue in `models.dev/api.json`. The surviving primary sources are the DeepSeek API changelog and the HF reference implementation, so every raw number above stays frozen at its 2026-09 status: **vendor-reported and unverified**.

**What that means for the scores.** Nothing moves, in either direction — there is no new evidence, only the absence of corroboration. The dimension scores stay pinned to the configuration the slug describes (1M window, 384-token images, $0.22/$0.66), and Cost efficiency stays at 95 on that last quoted rate rather than on any current listing, because no current listing exists.

**Lifecycle.** The experimental vision checkpoint was absorbed into DeepSeek's own V4 line: BenchLM now scores **DeepSeek V4.1 Flash 65.35** and **V4 Pro 62.65**, neither with a vision variant, and the V4-Flash line's non-vision checkpoints are the ones still being tracked. The endpoint this slug names is gone from the gateway.

**Not re-checked.** Whether the HF reference weights (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, MIT) are still downloadable — the API surface is retired and the aggregators have dropped the page, so this report makes no claim about weight availability either way.

**Net assessment.** An unverifiable historical record rather than a live option. The original report was honest about the experimental label; what it could not know is that the checkpoint would be retired within weeks and never get a public benchmark row. If the dataset keeps the slug, it should be treated as frozen and flagged for parking under the retired-identity rule.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (huggingface.co, api-docs.deepseek.com, rohitraj.tech, buildfastwithai.com, ai-atlas.co, llmlearner.com, livebench.ai, nano-gpt.com; BenchLM, Vals AI, Artificial Analysis, OpenRouter and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek API docs — changelog](https://api-docs.deepseek.com/)
  - [Hugging Face — deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  - [BenchLM — DeepSeek V4.1 Flash (successor line)](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [models.dev — provider catalogue](https://models.dev/api.json)
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Vision_Exp_2.md`, using the same headings.