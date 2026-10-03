# North Mini Code — findings by Muse Spark 1.3

- Source: Cohere/North-Mini-Code-1.0
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere Labs open-weights (Apache 2.0) agentic coding MoE — Cohere's first developer model, built for terminal work, repo-level engineering, and tool-driven agent workflows on small hardware.
- **Provider / access:** Hugging Face `CohereLabs/North-Mini-Code-1.0` (bf16/fp8/w4a16); Cohere API; Cohere Model Vault; OpenRouter; Azure Foundry catalog. Local vLLM + OpenCode config published by Cohere (interleaved reasoning). OpenAI-compatible via vLLM/OpenRouter.
- **Release / knowledge:** 2026-06-09 release (Cohere blog + HF page); knowledge cutoff not disclosed — no verified cutoff found.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (Hugging Face); OpenCode listing `north_mini_code` (provider path unverified).
- **Context window:** 256K total / 64K max output (vendor blog + HF card; Azure catalog lists 320K — discrepancy noted, vendor 256K used).
- **Modalities:** text in/out only (Artificial Analysis); reasoning yes (interleaved thinking, best left on); tool calls yes (trained for agentic coding, OpenCode-compatible, Melody parser); JSON mode not verified.
- **Pricing (as of 2026-10-03):** free on Hugging Face, OpenRouter, and Model Vault per Cohere blog; paid Cohere API / Azure options exist — scored on free availability.
- **Architecture:** decoder-only Transformer sparse MoE, 30B total / 3B active (128 experts, top-8 routed, sigmoid router, 3:1 sliding-window/global attention), SFT + RLVR post-training; open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.0%** (Cohere release table, ReAct harness; independent BenchmarkList eval 35.6% concurs)
- Tau3-Banking / Tau2-Bench: **37%** (AA τ²-Bench Telecom via AA article; no verified Tau3-Banking number found)
- GDPval-AA: **14%** (AA via AA article)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (AA via BenchLM/Sophon)
- HLE: **11.1%** (AA via BenchLM/Sophon)
- LCR / MLCR: **37.3%** (AA-LCR via BenchLM)
- CritPt: **0.3%** (AA via BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **27.6** (AA release-era ruler, AA article; current v4.3.2 model page shows 10, BenchLM 12.8% — ruler changed, not comparable)
- Omniscience Accuracy / Hallucination Rate: **18.9% accuracy / 83.2% hallucination rate** (AA via BenchLM; Omniscience Index −48.6%)

Coding:

- SWE-bench Verified / SWE-Pro: **67.6% / 40.2%** (Cohere release table, SWE-agent harness v1.1.0, 3-seed mean)
- LiveCodeBench: **70.3%** (LiveCodeBench v6, Cohere release table)
- SciCode / AA-SciCode: **38.2%** (Cohere release table; BenchmarkList concurs)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **Coding Index 33.4, Agentic Index 21.7** (AA via AA article); Terminal-Bench Hard 31.1% (Cohere); no verified DeepSWE number found

Long context:

- No verified MRCR / RULER / GraphWalks score found; AA-LCR 37.3% is the only measured long-context number (see above).

### Normalized scores (1–100)

- **Tool use: 45/100.** TB2.1 36.0% sits below the 45–60% mid band, Tau2-Telecom 37% is modest, and GDPval-AA 14% is weak; missing Claw/SWE-Atlas numbers cap it further.
- **Reasoning: 60/100.** GPQA 75.7% upper-mid with HLE 11.1% and AA-LCR 37.3% in the mid band; CritPt 0.3% and 83.2% hallucination rate cap it at mid.
- **Context window: 74/100.** 256K lands in the 200K–500K tier (200K = 70); nothing measured at 512K+ retrieval, which caps the score (64K max output noted, not penalized).
- **Multimodal: 15/100.** Text-only in/out per AA — the text-only band.
- **Coding: 68/100.** SWE-bench Verified 67.6% and LiveCodeBench v6 70.3% show real repo-level ability for the size class; SciCode 38.2%, SWE-Pro 40.2%, and Coding Index 33.4 cap it well below frontier (DeepSWE 74%+, SciCode 55%+, Coding Index 70%+).
- **Cost efficiency: 100/100.** Free on Hugging Face, OpenRouter, and Model Vault per Cohere — $0 = 100.
- **Overall Score: 52/100.** Mean of the five quality dims (45+60+74+15+68)/5 = 52.4 → 52; best fit as a free local/small-hardware agentic coding draft model, not as a planner, reasoner, or multimodal pick.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-03
- Method: public internet research (Cohere launch blog + HF model card 2026-06-09, AA article + model page, BenchLM, Sophon, BenchmarkList, Raschka 2026-06-12 analysis, Azure Foundry catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
