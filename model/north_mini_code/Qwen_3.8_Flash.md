# North Mini Code — findings by Qwen 3.8 Flash

- Source: Cohere / Cohere Labs (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code 1.0 (first member of Cohere's "North" open family)
- **Short description:** Cohere's first **agentic coding** model — an efficient 30B-total / 3B-active MoE built for code generation, real-world software engineering (SWE-agent) and terminal tasks, released open-weight for sovereign/on-prem developer use. A narrow specialist, not a general assistant.
- **Provider / access:** Hugging Face weights (bf16 / fp8 / w4a16), Cohere API, Cohere Model Vault, OpenRouter, OpenCode (tuned for it). Chat/agent harnesses.
- **Release / knowledge:** 2026-06-09.
- **IDs:** `cohere/north-mini-code-1.0` · HF `CohereLabs/North-Mini-Code-1.0`
- **Context window:** **256K total / 64K max generation** (official Cohere snapshot; the curated `meta.json` "128K" and "scaffolded" flag are stale — corrected).
- **Modalities:** **text in / text out only** (code-specialist; no image/audio/video), tool/terminal use yes, reasoning-token capability present via agentic harnesses.
- **Pricing (as of 2026-10-04):** **Apache 2.0 open weights** — free to self-host (min 1× H100 @ FP8/FP4); paid via Cohere API / Model Vault / OpenRouter.
- **Architecture:** MoE, **30B total / 3B active**; SFT→RL agentic-coding recipe; optimized for throughput (≈2.8× Devstral Small 2).

### Raw benchmarks found

> Numbers from the official Cohere launch + Hugging Face model blog (2026-06-09) and Sebastian Raschka's independent write-up (2026-06-12); harnesses stated by Cohere (SWE-agent for SWE-bench; ReAct single-terminal for Terminal-Bench v2; Terminus-2 for TB Hard). No general-knowledge/reasoning suite (GPQA, HLE, MMLU-Pro, AA Intelligence Index) is published — this is a code specialist — so Reasoning rests on a provisional floor.

Coding (headline strength):
- SWE-bench Verified: **67.6%** (pass@1, SWE-agent; 80.2% pass@10) — strong for a 3B-active open model
- SWE-bench Pro: **40.2%**
- Artificial Analysis Coding Index: **33.4** — "competitive among similarly sized models"
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Agent / tool use (terminal):
- Terminal-Bench v2: **36.0%** (ReAct single-terminal; 55.1% pass@10 per HF blog)
- Terminal-Bench Hard: **31.1%** (Terminus-2 harness)
- τ²-bench / BFCL / GDPval-AA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index / Omniscience: **no verified public score found** (code-only evaluation → Reasoning scored provisionally)

Long context:
- 256K total / 64K max generation; no MRCR / RULER / GraphWalks retrieval % published.

Multimodal:
- Text-only; no image/audio/video benchmark rows → text-only floor.

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4. Its SWE/terminal results are genuinely good for the size class and lift Coding; everything outside software engineering is unevidenced, so Reasoning is a provisional floor and Multimodal is the text-only 15 — that narrowness is the honest reason Overall lands below the cohort's 57.3. Cost excluded from Overall.

- **Tool use: 48/100.** Real agentic terminal capability (Terminal-Bench v2 36.0, TB Hard 31.1, SWE-agent orchestration) but sub-mid on the terminal axis and no τ²/BFCL/GDPval evidence.
- **Reasoning: 45/100.** No GPQA/HLE/MMLU/AA-Index published at all — a code specialist; held at a provisional floor (nudged above bare-minimum only by the general competence implied by 67.6 SWE-bench).
- **Context window: 75/100.** Verified 256K sits mid 200K–500K band (200K anchors 70); 64K max-generation and no retrieval benchmark keep it at the mid.
- **Multimodal: 15/100.** Text-only input/output (Cohere lists code/text; no vision rows) → text-only floor.
- **Coding: 66/100.** SWE-bench Verified 67.6 (pass@1) is the standout; SWE-bench Pro 40.2, AA Coding Index 33.4 and Terminal-Bench 36.0 place it as a strong-for-size but absolute-mid coding agent.
- **Cost efficiency: 97/100.** Apache-2.0 open weights runnable on a single H100 = near-free; paid Cohere/Model-Vault tiers only if you want managed inference.
- **Overall Score: 49.8/100.** (48+45+75+15+66)/5 — a sovereign, efficient, agentic-coding specialist. Best fit: self-hosted code agents, terminal/SWE automation and code review on constrained hardware, where its 67.6 SWE-bench punches well above its 3B-active footprint and general reasoning/vision are simply out of scope.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research (official Cohere launch post + Hugging Face model blog, cross-checked with Sebastian Raschka's independent benchmark write-up and swebench.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: publication of GPQA/HLE (broad reasoning) or any image-input support would lift Reasoning/Multimodal; a LiveCodeBench/DeepSWE number would firm Coding beyond the SWE-agent result.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
