# Inkling Small — findings by GLM 5.3

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's smaller open-weight hybrid-reasoning model, sibling of Inkling — very strong math and knowledge benchmarks with a 1M window at high serving speed, but weak independent agentic results. Cheap open-weights reasoning/coding pick.
- **Provider / access:** Thinking Machines first-party API (`https://thinkingmachines.ai`), 3 providers listed on Artificial Analysis; project meta lists Zen ID `opencode/inkling-small`, absent from the live Zen models list when re-checked 2026-10-08 — treat as rotated. Chat Completions-style API.
- **Release / knowledge:** 2026-07-30 (Artificial Analysis); knowledge cutoff not disclosed.
- **IDs:** `opencode/inkling-small` (project meta); Hugging Face weights `thinkingmachines/Inkling-Small`; no Free ID on Zen.
- **Context window:** 1,000,000 (1M) total (Artificial Analysis, BenchLM); max output split not published.
- **Modalities:** text, image, and speech in; text out; hybrid reasoning (reasoning + non-reasoning modes); tool calls yes (BrowseComp/MCP results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.30 in / $1.20 out per 1M on Thinking Machines' API (Artificial Analysis; cache discount 80%); Apache 2.0 weights are free to self-host.
- **Architecture:** 266B total / 12B active MoE, open weights, Apache 2.0 (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (vendor launch post via BenchLM) / **55.1%** (Vals harness)
- MCP Atlas: **79.6%** (vendor launch post via BenchLM)
- BrowseComp: **77.4%** (vendor launch post via BenchLM)
- Toolathlon-Verified: **54.4%** (vendor launch post via BenchLM)
- AA Agentic Index: **24.9%** (Artificial Analysis model benchmarks via BenchLM)
- GDPval-AA: **1191** (31.2% normalized) (Artificial Analysis via BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor post via BenchLM; AA agrees 89.5%; Vals 83.6%)
- HLE: **47.8%** with tools / **31.6%** without tools (vendor post) / **33.3%** (AA harness)
- AIME26: **95.5%** (vendor post via BenchLM)
- HMMT Feb 2026: **90.2%** (vendor post via BenchLM)
- ARC-AGI-2: **40.1%** (vendor post) / ARC-AGI-1: **84.0%** (ARC Prize verified results)
- MMLU-Pro: **85.6%** (Vals via BenchLM)
- AA-LCR: **75.7%** (Artificial Analysis via BenchLM)
- CritPt: **8.3%** (vendor post via BenchLM)
- Artificial Analysis Intelligence Index: **26** (AA model page; BenchLM 25.7)
- AA-Omniscience Index: **-8.9** (accuracy 33.2%, hallucination rate 63.0%) (AA via BenchLM)

Coding:

- SWE-bench Verified: **80.2%** (vendor post via BenchLM); SWE-bench (Vals) **82.2%**
- SWE-bench Pro: **55.9%** (vendor post via BenchLM)
- LiveCodeBench: **85.9%** (Vals via BenchLM)
- SciCode: **48.7%** vendor / **49.7%** AA (BenchLM)
- AA Coding Index: **53.0%** (AA via BenchLM)

Multimodal:

- MMMU-Pro: **74%** (vendor post; AA agrees)
- CharXiv: **81.3%** with tools / 77.4% without (vendor post via BenchLM)

Long context:

- 1M window verified (Artificial Analysis); no MRCR/RULER retrieval percentage published; AA-LCR 75.7% is the closest long-context reasoning proxy.

Instruction following:

- IFBench: **82.2%** (vendor post via BenchLM)

### Normalized scores (1–100)

- **Tool use: 70/100.** MCP Atlas 79.6% and BrowseComp 77.4% are strong, Terminal-Bench 2.1 64.7% clears the mid band; capped hard by the independent AA Agentic Index 24.9%, GDPval-AA 1191 (below the 1750 frontier ref) and Toolathlon 54.4% — vendor agentics look better than third-party measurements.
- **Reasoning: 79/100.** GPQA Diamond 89.5%, HLE 47.8% (with tools), AIME26 95.5% and ARC-AGI-2 40.1% are near-frontier; capped by CritPt 8.3%, a 63% hallucination rate (Omniscience -8.9) and AA Intelligence Index 26 — knowledge depth beats reliability.
- **Context window: 95/100.** 1M window verified (Artificial Analysis); not 100 because no ≥98% retrieval-at-512K measurement was published.
- **Multimodal: 90/100.** Text, image, and speech input verified (audio-in tier per methodology), with solid MMMU-Pro 74% and CharXiv 81.3%; capped by text-only output.
- **Coding: 74/100.** SWE-bench Verified 80.2% and LiveCodeBench 85.9% are strong; capped by SciCode ~49% (below the 55% frontier ref), AA Coding Index 53.0% and Terminal-Bench 2.1 64.7% (below the 85% ref).
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M is below the ~$0.60/$2.20 class (~92), and Apache 2.0 weights allow free self-hosting; only sub-$0.15 tiers score higher.
- **Overall Score: 82/100.** (70 + 79 + 95 + 90 + 74) / 5 = 81.6 → 82. Best-fit recommendation: cheap open-weights math/knowledge reasoning and clean-room coding at 200 tok/s; not a primary autonomous agent — pair with a stronger agentic model for tool-heavy work.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis, BenchLM, Vals, ARC Prize, vendor launch post citations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
