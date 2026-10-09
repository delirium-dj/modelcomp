# GLM-5.3 FlashX — findings by Space Bunny

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Z.ai's **high-speed serving tier** for GLM-5.3-Flash, released 2026-09-18. It is the *same* 320B-total / 18B-active MoE weights as GLM-5.3-Flash — the difference is inference infrastructure (up to 200 tokens/s) and price (~$2.5× the Flash rate), not capability. Top use case: high-throughput agent loops and coding assistants that call the model repeatedly and need low per-call latency. Not yet included in the GLM Coding Plan.
- **Provider / access:** Z.ai Chat Completion API (`glm-5.3-flashx`); also OpenRouter (`z-ai/glm-5.3-flashx`), Vercel AI Gateway (`zai/glm-5.3-flash`), NVIDIA NIM, and B.AI. Chat Completions API. No OpenCode Zen ID found.
- **Release / knowledge:** FlashX launched 2026-09-18; base GLM-5.3-Flash launched 2026-08-26 (stealth-tested as `ox-alpha` on OpenCode and OpenRouter). Knowledge cutoff: not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.ai), `z-ai/glm-5.3-flashx` (OpenRouter)
- **Context window:** **1,000,000 tokens** (1,048,576 on the NVIDIA NIM endpoint), **128K max output**. Verified on Z.ai's official GLM-5.3-Flash/FlashX docs page.
- **Modalities:** Video, image, text, and file in → text out. Vision is native (built into the coding loop, not a bolted-on VL head) — the model observes rendered UI and interaction feedback to self-review. Reasoning: always on, cannot be disabled; `reasoning_effort` accepts low/high/max, defaults to max. Tool calls: yes. Structured output / JSON schema: yes.
- **Pricing (as of 2026-10-09):** **$0.37 / $1.25 per 1M** input / output (ApX, Puter, lmmarketcap all agree). Base GLM-5.3-Flash is $0.15 / $0.03 cached / $0.50; the text flagship GLM-5.3 is $1.40 / $4.40. Paid only — no Free tier; FlashX is not on the GLM Coding Plan.
- **Architecture:** **320B total / 18B active MoE, MIT-licensed open weights** (identical to GLM-5.3-Flash). 45 decoder layers in a hybrid attention stack: 34 KDA linear-attention layers interleaved with 11 DeepSeek sparse attention layers, plus Manifold-Constrained Hyper-Connections (mHC), 288 routed experts with top-8 routing, a vision encoder, and 1 MTP draft layer. Pre-trained on a 30T-token multimodal corpus. Z.ai reports ~3.0× less attention compute and ~4.4× smaller KV cache vs. GLM-5.3.

### Raw benchmarks found

> **Inherited benchmarks:** FlashX shares weights with GLM-5.3-Flash, so Z.ai and third parties report Flash's numbers. This is a documented equivalence claim (Puter: "same 320-billion-parameter Mixture-of-Experts weights (18 billion active) rather than a separate model"), not an inference.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai launch post via llm-stats; independently listed by benchlm.ai) — vs GLM-5.2 81.0%
- Terminal-Bench 2.1 (Vals harness): **62.9%** (benchlm.ai; GLM-5.3 flagship scores 71.5% on the same harness)
- Terminal-Bench 4.0: **33%** (Artificial Analysis, Index v4.3.2)
- Toolathlon-Verified: **78.4%** (Z.ai, self-reported — actually *above* the GLM-5.3 flagship's 73.0%)
- AutomationBench: **48.8%** (Z.ai; vs GLM-5.2 26.2%) — AA's own AutomationBench-AA harness scores it **60%**
- GDPval-AA v2.1: **1641 Elo** (Artificial Analysis); AA-Briefcase v1.1 **1452**
- Agents' Last Exam: **26.3%** (Z.ai; vs GLM-5.2 20.4%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified 78.4% (above); MCP-Atlas and SWE Atlas Codebase QnA — no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **86.4%** (benchlm.ai; GLM-5.3 flagship 88.1%)
- MMLU-Pro (Vals): **86.1%** (benchlm.ai; flagship 86.8%)
- HLE (with tools): **55.3%** (benchlm.ai) / **40%** (Artificial Analysis Index v4.3.2 harness)
- Artificial Analysis Intelligence Index: **57** on the AA model page headline; **42** in AA's Index v4.3.2 comparison tables (benchlm.ai independently scores it 60.62 / #27 of 111, public-lane 55.8)
- CritPt: **15%** (Artificial Analysis)
- AA-Omniscience: **7** (Artificial Analysis)
- LCR / MLCR: no verified public score found
- GDP.pdf (professional document reasoning, all-pass): **15%** (Artificial Analysis)

Coding:

- Terminal-Bench 2.1: **84.3%** (see above); Terminal-Bench 4.0 **33%**
- DeepSWE v1.1: **63.4%** (Z.ai; vs GLM-5.2 46.2% — a +17.2 point jump)
- SWE-bench (Vals): **92.0%** (benchlm.ai; GLM-5.3 flagship 95.4%)
- LiveCodeBench (Vals): **80.5%** (benchlm.ai; ties the GLM-5.3 flagship exactly)
- SciCode: **52%** (Artificial Analysis, under review)
- NL2Repo: **56.3%** (Z.ai; vs GLM-5.2 48.9%)
- OpenHarmony Bench: **57.3%** (benchlm.ai)
- Z.ai Code Bench v1.0 (in-house, run on Claude Code 2.1.207): **29.0 at max effort vs Claude Opus 4.8's 29.5** — near-parity with Opus on a vendor-run harness; treat as directional only
- Vibe Code Bench / DeepSWE-other: no verified public score found

Multimodal / grounded:

- OfficeQA Pro: **62.4%** (benchlm.ai, independent)
- CharXiv: **89.4%** (benchlm.ai, independent)
- Vision is architectural: image input is native, up to 8 images per request on the NVIDIA NIM endpoint

Long context:

- 1M-token context verified by Z.ai and NVIDIA NIM (1,048,576). **No MRCR / RULER / GraphWalks retrieval numbers published** for this model. The hybrid linear+sparse attention stack is explicitly designed to preserve long-context quality while cutting KV cache 4.44× — an architectural claim, not a measured retrieval score.

Speed / cost efficiency inputs:

- Inference speed: **up to 200 tokens/s** (Z.ai, FlashX launch claim — this is the entire reason the tier exists)
- Base GLM-5.3-Flash speed: ~87 tok/s class (comparable models); FlashX is roughly 2–3× faster
- Pricing: $0.37 / $1.25 — about 2.5× GLM-5.3-Flash's rate, ~4× cheaper than the GLM-5.3 flagship on input

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 at 84.3%, Toolathlon-Verified 78.4%, AutomationBench-AA 60%, GDPval-AA 1641 Elo — solidly in the frontier band on terminal and tool work. Capped below the very top because the Vals Terminal-Bench rerun drops to 62.9%, Agents' Last Exam is only 26.3%, and no Tau3 or Claw-Eval numbers exist.
- **Reasoning: 78/100.** GPQA Diamond 86.4% and MMLU-Pro 86.1% are strong, HLE w/tools 55.3% is respectable. Held back by an AA Intelligence Index of 42–57, CritPt at just 15%, AA-Omniscience at 7, and GDP.pdf at 15% — this is a coding-and-agents model, not a frontier deep-reasoning one.
- **Context window: 95/100.** 1M tokens verified on both Z.ai's docs and NVIDIA's NIM card (1,048,576). Not 100 because no long-context *retrieval* benchmark (MRCR/RULER) has been published for it.
- **Multimodal: 82/100.** Native video + image + text + file input with a vision encoder trained into the coding loop, independently confirmed by OfficeQA Pro 62.4% and CharXiv 89.4%. No audio input and text-only output keep it out of the top band.
- **Coding: 85/100.** SWE-bench (Vals) 92.0%, LiveCodeBench 80.5%, DeepSWE 63.4%, Terminal-Bench 2.1 84.3%, OpenHarmony 57.3%. Below the frontier because SciCode is 52% and the harder Terminal-Bench 4.0 / frontier evals land at 33%.
- **Cost efficiency: 91/100.** $0.37 in / $1.25 out sits between the ~$0.60/$2.20 (~92) reference point and cheaper tiers, and it is 4× cheaper than the GLM-5.3 flagship on input. No Free tier and no Coding Plan access for FlashX specifically keep it out of the 95+ range.
- **Overall Score: 86/100.** Best fit: high-volume agent loops and coding assistants over very long documents that need 1M context and fast iteration more than they need frontier reasoning depth.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across Z.ai's official GLM-5.3-Flash/FlashX documentation, the NVIDIA NIM model card (architecture details), Artificial Analysis model and comparison pages, benchlm.ai comparison tables, and llm-stats/Puter/ApX/OpenRouter listings. All benchmark values are for the identical GLM-5.3-Flash weights, which FlashX serves unchanged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.