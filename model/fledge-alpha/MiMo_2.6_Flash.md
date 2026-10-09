# Fledge Alpha — findings by Mimo v2.6 Flash

- Source: unclaimed/anonymous (OpenCode Zen free tier, `opencode/fledge-alpha-free`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Anonymous stealth free model on OpenCode Zen/OpenRouter (first listed 2026-10-01) that posted the best free-tier coding numbers in independent Oct 1–4 test batteries — fast (~61 tok/s), 1M context, no claimed identity.
- **Provider / access:** OpenCode Zen free tier (`opencode/fledge-alpha-free`, the evaluated route) + OpenRouter trial listing under an "unknown" publisher namespace; OpenAI-compatible Chat Completions (OpenCode Zen). No paid host found.
- **Release / knowledge:** First listed 2026-10-01 (models.dev); knowledge cutoff unknown/undisclosed.
- **IDs:** `opencode/fledge-alpha-free` (models.dev, released 2026-10-01); OpenRouter slug `fledge-alpha`.
- **Context window:** 1,048,576 input (1M) / 131,072 max output per models.dev; verified 2026-10-05.
- **Modalities:** text + image in; text out; reasoning yes (`reasoning_effort` low/high/max); tool calls yes; structured output not reported; temperature yes; closed/proprietary (no weights).
- **Pricing (as of 2026-10-05):** free — $0.00 in / $0.00 out per 1M on the evaluated Zen tier (models.dev); battery cost equivalent ≈ $0.00560 per bug-fix task converted at DeepSeek V4.1 Flash pricing. Stealth caveat: unclaimed model, no accountable data-handling policy (The Neural Feed, 2026-10-02); the free preview may be withdrawn.
- **Architecture:** not disclosed. Identity unknown — rumored "DeepSeek v4.1 Pro" is explicitly labeled a guess (The Neural Feed); no vendor claim as of 2026-10-05.

### Raw benchmarks found

> Measured numbers with (source, harness, n). Source A = fellipesoares/openagent-evals battery (run 2026-10-02→04, OpenCode 1.18.33, `opencode/fledge-alpha-free`, 5 tests × 254 items, single run per item). Source B = davila7/claude-code-templates multi-model battery (spacebunnydebates/openagent-evals suite). Source C = stealthmodels.dev (2026-10-03).

Agent / tool use:

- Terminal-Bench 2.1: **79%** <(A, n=14 tasks, 1 run — best free model in battery)>
- Bug-fix Battery I: **15/15 runs** <(A, 5 bugs × 15 runs, isolated rerun after battery-I contamination; median 47 s/task; 89% cache-hit; one-tool-per-turn style)>
- Tau3-Banking / Tau2-Bench: no verified public score found (systemic — absent from free-tier suites)
- GDPval-AA: no verified public score found (systemic)
- Claw-Eval / MCP-Atlas / SWE Atlas: no verified public score found (systemic)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** <(C, 36/39, CI 79.7–97.3 — vs Space Bunny 82.1%)>
- HLE: **23%** <(A, n=100, text-only; ties DeepSeek V4.1 Flash, below Big Pickle 38%)>
- AA-Omniscience: **index −5** <(A, n=100 — worst factual knowledge in 6-model battery; Big Pickle +43, Space Bunny +29, DeepSeek +29, GLM +20)>
- Artificial Analysis Intelligence Index / CritPt / ARC-AGI / AIME: no verified public score found (systemic)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **75%** <(A, "Verified: Mini" variant, n=20, 1 run; ties Space Bunny; DeepSeek 85%)>
- SciCode: **52%** <(A, n=20 — best score in battery; DeepSeek 51, Big Pickle 44, GLM 41)>
- LiveCodeBench: no verified public score found (systemic)
- Vibe Code Bench: no verified public score found

Long context:

- 1M input window declared (models.dev); MRCR / RULER / AA-LCR retrieval: no verified public score found

Multimodal:

- Image input supported; MMMU / AI2D / CharXiv: no verified public score found

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 79% and 15/15 bug-fix runs are strong, but n≤14 single-run indie harnesses with no Tau3/GDPval/MCP coverage (systemic gap) cap it at 75.
- **Reasoning: 65/100.** GPQA 92.3% is frontier-tier (n=39), but HLE 23% sits below the 30% frontier ref and AA-Omniscience index −5 (worst-of-battery, net hallucination) drags the composite down.
- **Context window: 95/100.** 1M window lands the ≥1M tier (95–100); no long-context retrieval eval exists, so scored at the tier floor.
- **Multimodal: 75/100.** text+image-in tier (75–89); no vision benchmark (MMMU/AI2D) published, so low end of the band.
- **Coding: 78/100.** SWE-bench Verified 75% + TB2.1 79% + SciCode 52% (battery-best) — just under the 55% SciCode frontier ref, no LiveCodeBench, all small-n single-run; 78.
- **Cost efficiency: 100/100.** Evaluated free tier at $0.00/$0.00 (Zen free route, ≈$0.0056/task equivalent) → free = 100 per the cost rule; stealth-preview durability caveat noted in the card.
- **Overall Score: 78/100.** (75+65+95+75+78)/5 = 77.6 → 78 — best fit: fast free agent/coding runner (bug-fixing, Terminal-Bench-class tasks); avoid for fact-sensitive work (Omniscience −5) or trust-critical pipelines (unclaimed identity).

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (models.dev, fellipesoares/openagent-evals battery README, davila7/claude-code-templates multi-model battery, stealthmodels.dev, The Neural Feed); scores are normalized 1–100 interpretations, not official vendor scores. Independent small-n results (n≤39, single run) — treat as directional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.