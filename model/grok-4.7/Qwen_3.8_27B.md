# Grok 4.7 — findings by Qwen 3.8 27B

- Source: xAI (`opencode/grok-4.7`; vendor API: xAI Grok API, launched 2026-09-21)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's (branded SpaceXAI on the launch post) frontier model for coding, agentic knowledge work, and long-running agent workflows; new larger base + longer RL run than Grok 4.6.
- **Provider / access:** xAI Grok API, Grok Build, Cursor, third-party coding harnesses, model routers, cloud platforms. Repo-registered as `opencode/grok-4.7`; no Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-21 (xAI announcement; neoteo.com); knowledge cutoff not publicly documented.
- **IDs:** `opencode/grok-4.7` (repo registry; no Free ID on Zen — paid xAI API).
- **Context window:** 500K tokens (Artificial Analysis, llm-stats, tokenscost.com — unchanged from Grok 4.6). Note: repo `meta.json` still says 128K; multiple current sources say 500K.
- **Modalities:** Multimodal input (text + image per llm-stats); text out. Configurable reasoning effort (low→xhigh); tool calls; agentic harnesses (Grok Bot / Grok Build).
- **Pricing (as of 2026-09-28):** $2.00 input / $6.00 output per 1M; cached input $0.50/1M; long-context tier above 200K prompts: $4/$12 per 1M. Fast variant: 2× output speed at 2× price.
- **Architecture:** Proprietary (xAI); new larger base model, longer RL run, improved self-verification (xAI launch post).

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase (v1.1): **1657 Elo** (Artificial Analysis, xhigh; xAI table; +111 over Grok 4.6 High; Fable 5.1 Max 1678, GPT-5.6 Sol Max 1487)
- GDPval-AA: **1695 Elo** (Artificial Analysis; +90 over Grok 4.6 High)
- EEBench: **64.0%** (xAI launch table, xHigh; GPT-5.6 Sol Max 39.4%, Fable 5.1 Max 56.4%)
- Harvey Legal Agent Benchmark: **19.6%** (xAI launch table; leads all four listed models)
- Terminal-Bench 4.0: **38.0%** (xAI launch table, xHigh; 33% in AA Coding Agent Index w/ Grok Build; Fable 5.1 Max 57.9%, GPT-5.6 Sol Max 37.3%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** SWE-Atlas-QnA (AA Coding Agent Index with Grok Build, xhigh)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no absolute value found — AA-LCR regressed −3.7 p.p. vs Grok 4.6 High (Artificial Analysis)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **46** (xhigh; top-4 labs; +2 over Grok 4.6)
- Omniscience Accuracy / Hallucination Rate: **47% / 29%** (AA-Omniscience, xhigh; Index 32, up from 30)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE v1.1: **71.0%** (xAI launch table; 73% per AA Coding Agent Index with Grok Build; GPT-5.6 Sol Max 72.7%, Fable 5.1 Max 70.0%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- CursorBench 4.0: **46.3%** (xAI launch table; Fable 5.1 Max 51.8%)
- AA Coding Agent Index: **56** (with Grok Build, xhigh; 4th among native-harness models behind Fable 5.1, GPT-6 Astra, Opus 5)

Long context:

- No MRCR / RULER / GraphWalks retrieval values published; 500K window with long-context tier pricing above 200K.

### Normalized scores (1–100)

- **Tool use: 82/100.** Frontier agentic knowledge work (AA-Briefcase 1657 Elo, GDPval-AA 1695, both just behind the top Claude flagships) and EEBench 64.0 lead the pack; TB4.0 33–38% (vs Fable 5.1 57.9%) caps it.
- **Reasoning: 76/100.** AA Intelligence Index 46 (top-4 lab) sits between the mid band (Index 20–35 → 55–65) and frontier (60+ → 90–100); no GPQA/HLE published, AA-LCR regressed, capping at 76.
- **Context window: 88/100.** 500K window maps to the 500K–1M = 85–94 band; no long-context retrieval measurement found.
- **Multimodal: 70/100.** Multimodal (image) input with text out; no vision-specific benchmark numbers verified, no audio/video modality evidence beyond image — top of the image-in band.
- **Coding: 82/100.** DeepSWE v1.1 71–73% (near the 74%+ frontier reference), SWE-Atlas-QnA 63%, AA Coding Agent Index 56 (4th native-harness); TB4.0 33–38% and no SWE-bench Verified hold it under 85.
- **Cost efficiency: 78/100.** $2/$6 with $0.50 cache sits between the $1.25/$4.25 (~88) and $3/$15 (~60) references; long-context tier ($4/$12 above 200K) and high token-per-task usage (81k output) pull it down.
- **Overall Score: 80/100.** (82 + 76 + 88 + 70 + 82) / 5 = 79.6 → 80; best-fit for agentic knowledge work and terminal-heavy coding at frontier-minus price.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (Artificial Analysis launch article, xAI launch table via neoteo.com, llm-stats.com, tokenscost.com, aipricecompare.org, theairankings.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
