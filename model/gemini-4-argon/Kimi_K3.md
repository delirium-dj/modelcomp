# Gemini 4 Argon — findings by Kimi K3

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-09 (UTC) — deep second pass (first pass 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's new frontier model and the first of the Gemini 4 generation (first Google flagship since Gemini 3.1 Pro, Feb 2026), introduced by Koray Kavukcuoglu as a long-horizon workhorse for real-world software engineering, enterprise knowledge work (legal/finance), and cyber defense. Codename-style naming (like GPT-6 Astra/Sol) replaces the Pro/Flash tier scheme for this generation.
- **Provider / access:** Still gated as of 2026-10-09: Fairwind Program (vetted cyber defenders, >650 partners incl. Wiz) first; paid API customers and Google AI Ultra "next," no date; no public API model ID or published API surface yet (agentpedia.codes API-status section, blog.google announcement). No Free ID (paid only, gated).
- **Release / knowledge:** Announced 2026-09-30 (blog.google introduces "Gemini 4 Argon"; DeepMind evals methodology at deepmind.google/models/evals-methodology/gemini-4-argon). Note: aimodelsnavi cites "Oct 5" — that is access-press recirculation, not the announcement. Knowledge cutoff not published.
- **IDs:** No public API ID yet (gated Fairwind access). No Zen ID.
- **Context window:** Google has not officially disclosed the input window (Artificial Analysis operates it at 1M); headline spec is the 1,000,000-token single-response max output ("Long Decode Continuation", up from 64K) — first frontier model with million-token output (blog.google, datalearner.com, netalith.com, ai-on-mac.com; the "2M context" rumor remains unconfirmed leak).
- **Modalities:** Text + image input per Google's table; AA's launch post also lists video and speech input (LVBench 91.7% long-video row supports video-in). Text output. Reasoning model (high = highest setting; AA tested at high). Gray Swan IPI attack success 0.7% — best-in-class injection resistance.
- **Pricing (as of 2026-10-09):** Introductory $2.00/M input, $10.00/M output, $0.10/M cached (95% cached discount); standard after promo $4.00/$20.00, $0.20 cached (blog.google + Logan Kilpatrick; confirmed by datalearner.com, netalith.com, aimodelsnavi.com). No intro end date. AA-measured task cost: $1.99 (intro) vs GPT-6 Astra $3.26, Opus 5.5 $5.98.
- **Architecture:** Proprietary, unreleased weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier, business execution): **51.3%** — #1 (Google/deepmind.google evals methodology: Opus 5.5 42.5%, Astra 41.4%; Anthropic's own card lists Opus 5.5 at 40.0% — discrepancy flagged)
- AutomationBench-AA: **77.5%** — #1, +6 over Sonnet 5.5 (Artificial Analysis, independent)
- GraphWalks BFS 256K–1M (long-context agentic): **84.2%** — #1 (Opus 5.5 66.8%, Astra 71.8%); GraphWalks BFS 128K: **99.7%** (Google)
- OSWorld 2.0 (computer use): **69.2%** — trails Astra 72.6% (Google)
- Agents' Last Exam: **39.5%** — below Astra's 59.3% (Google)
- CWE-bench v1: **68%** — tied #1 with GPT-6 Astra, +1 over Opus 5.5 (Google; verified on Collinear cwe-bench.com)
- Gray Swan IPI (15 attempts, lower better): **0.7%** — best of frontier (Astra 8.5%) (Google launch chart)
- Vals CyberBench: **77.86%** — #2, 0.12 pts behind GPT-6 Sol (Vals, independent)
- Harvey Legal Agent: **19.6%** vs Astra 5.4%, Opus 5.5 3.8%; Vals Finance Agent v2: **65.4%** (Opus 5.5 58.6%, Astra 53.5%) (Google)
- GDPval-AA: **1626 Elo / 56.3%** normalized — #1, above GPT-6 Astra (1542 / 52.1%) (Artificial Analysis, independent); GDP.pdf: **21.8%** (Astra 31.0%); AA Briefcase: **1490 Elo**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52.6–53** (high effort) — equals GPT-6 Astra (52.7), behind Opus 5.5 (58) and Sonnet 5.5 (56) (Artificial Analysis, independent)
- AA-HLE: **57.1%** — new this pass (Artificial Analysis, independent); matches Astra's 57.2% w/ tools. First pass had no verified HLE row.
- AA-LCR: **79.7%**; CritPt: **27.1%** (Artificial Analysis, independent — new this pass)
- AA-Omniscience hallucination rate: **15.1%** — lowest AA has measured on models ≥45 Index; accuracy 49.9% (−13 pts vs Astra, deliberate abstention trade-off); Omniscience Index 42.4
- LABBench2: **88.8%** (Google)
- LMArena Text Arena: **1525 pts, #1**; also #1 in coding, hard prompts, instruction following, creative writing (arena.ai, independent)
- GPQA Diamond: no verified public score found individually for this ID
- BenchLM overall: **81.76/100, #5 of 889** (benchlm.ai, updated 2026-10-09; partial coverage, 31/625 benchmarks — conservative)

Coding:

- DeepSWE v1.1 (long-horizon SWE): **77.9%** — SOTA (Opus 5.5 74.2%, Astra 74.1%) (Google)
- Terminal-Bench 4.0: **57.4%** Google-measured; AA independent: **57.1%** — consistent; behind Opus 5.5 (66.4%) and Astra (57.9–59.1%)
- Terminal-Bench Science 0.1 (6x verifier timeout): **57.6%** — behind Astra (64.6%), Opus 5.5 (63.3%) (Google)
- FrontierSWE v2: **55.0%** — behind Astra (65.5%) and Opus 5.5 (62.3%) (Proximal frontierswe.com)
- Vibe Code Bench: **91.9%** — new this pass (Google)
- AA-SciCode: **61.8%** — new this pass; above Astra's 56.5% (Artificial Analysis)
- PostTrainBench v1.1: **45.3%** (Google; Astra 44.3% on the same chart)
- Vals IOI (programming olympiad): **100%**, tied with GPT-6 Astra (Vals, independent)
- LMArena Code Arena / WebDev: **#8, 1679 pts** (weakest spot; matches Bloomberg-reported internal doubts about front-end work)

Long context:

- GraphWalks BFS 128K: **99.7%** / 256K–1M: **84.2%** — best published (Google); plus unique 1M-token single-response output.

Multimodal:

- LVBench (long video): **91.7%** — SOTA (Google); Chartography (no tools): **71.6%** (Google). Text-only output.

### Normalized scores (1–100)

- **Tool use: 85/100.** #1 on both AutomationBench variants (51.3% Google / 77.5% AA), #1 GDPval-AA (1626/56.3%), best-in-class GraphWalks 84.2%, tied-first CWE-bench, best IPI resistance (0.7%); capped by trailing OSWorld 2.0 (69.2%), Terminal-Bench 4.0 (57.1–57.4%) and Agents' Last Exam (39.5%).
- **Reasoning: 84/100.** AA-HLE 57.1% (new, matches Astra's tool-augmented row), AA-LCR 79.7%, LMArena Text #1 (1525), record-low 15.1% hallucination; capped because AA Index 52.6 still sits behind Opus 5.5 (58) and Sonnet 5.5 (56), and CritPt is only 27.1%.
- **Context window: 89/100.** ~1M input (AA-operated) with best-of-field GraphWalks (99.7% @128K, 84.2% @256K–1M) and unprecedented 1M max single-response output vs 128K for rivals; capped because Google hasn't formally disclosed the input window in its own docs.
- **Multimodal: 70/100.** Image + (per AA) video/speech in, LVBench 91.7% video SOTA, Chartography 71.6%; text-only output and gated access cap it below full-duplex models.
- **Coding: 83/100.** DeepSWE 77.9% SOTA, IOI 100%, Vibe Code Bench 91.9%, AA-SciCode 61.8% (above Astra) — raised from 82 on genuinely new second-pass rows; still capped by Terminal-Bench 57.1–57.4%, FrontierSWE 55.0%, and WebDev Arena #8.
- **Cost efficiency: 76/100.** Intro $2/$10 ($0.10 cached) yields $1.99/AA-task — 60% of Astra — but standard $4/$20 and a heavy ~62K output tokens/task erode it once the promo ends.
- **Overall Score: 82/100.** Half-up mean of (85+84+89+70+83)/5 = 82.2 → 82. (First-pass arithmetic "81.8 → 83" was mis-rounded; corrected.) Best fit: gated enterprise/defense work needing million-token outputs, long-document/video analysis, and low-hallucination knowledge work — once access opens beyond Fairwind.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: deep second-pass public web research, 3+ independent sources (blog.google announcement + deepmind.google evals methodology, benchlm.ai 31-row scorecard aggregating Artificial Analysis / Vals AI / Collinear CWE-bench / Proximal FrontierSWE, plus datacamp/datalearner/netalith/aimodelsnavi/felloai launch coverage and agentpedia access-status guide); conflicts flagged (announce date 2026-09-30 vs recirculated 10-05, AutomationBench Opus 5.5 42.5% vs 40.0% cross-card). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
