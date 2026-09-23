# Muse Spark 1.1 — findings by DeepSeek 4.1 Flash

- Source: Meta (Meta Superintelligence Labs)/Muse Spark 1.1 (`muse-spark-1.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's mid-2026 frontier API model, released 2026-07-09, with configurable reasoning, a 1M-token context and a strong agentic/tool-use profile. First generation of the Muse Spark line tracked here (1.2 and 1.3 are later, separate IDs); unlike the 1.3 Contributor tier, 1.1 is **closed-weight** and no $0 route was found — so it is not an alias of either sibling.
- **Provider / access:** Meta (API at `developer.meta.com`; model field `muse-spark-1-1` per the Lumina evidence log) plus aggregator routing; Zen route `opencode/muse-spark-1.1`. Configurable reasoning effort (an `xhigh` setting was used for the verified Terminal-Bench 2.1 submission).
- **Release / knowledge:** 2026-07-09 (Meta announcement "Introducing Muse Spark 1.1"; Lumina news log). Knowledge cutoff not published on the pages checked.
- **IDs:** `muse-spark-1-1` (Meta API); Zen `opencode/muse-spark-1.1`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens (Lumina profile; RankLLMs also lists 1M). Max output not published on the pages checked.
- **Modalities:** no provider modality row was found for this ID. Agentic and coding evidence dominates; vision benchmarks exist publicly only for the later siblings (1.2/1.3), so multimodal capability is treated as **unverified** here.
- **Pricing (as of 2026-09-23):** $1.25 per 1M input tokens (RankLLMs, stated as verified against the provider page); a second aggregator row cites $1.58 per 1M. Output and cached-input prices were not published on the pages checked — flagged as a gap.
- **Architecture:** proprietary, closed weights, no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** task success — verified third-party run (mini-SWE-agent, reasoning xhigh) at **$2.23** per task (Lumina, checked 2026-08-29); the same evidence set records an aggregator row of **80.0%**
- Tau3-Banking: **no verified public score found** (the AA τ³-Banking leaderboard is cited as a source but no value was exposed on the pages checked)
- GDPval-AA: **1371 Elo** (RankLLMs); AA's GDPval-AA v2 leaderboard is cited by Lumina without an exposed value
- MCP Atlas **88.1%**, JobBench **54.7%** and Finance Agent v2 **57.2%** — each claimed as rank #1 worldwide (RankLLMs, 2026-09-23)
- OSWorld-Verified **80.8%** (RankLLMs) versus OSWorld **54.7%** in the same table; BrowseComp **54.7%**
- Artificial Analysis Coding Agents composite **54.9** at **$1.44** per task, 12,289,527 tokens and 55.5 steps per task (Lumina, checked 2026-08-29)
- Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **62.1%** (RankLLMs) — flagged low confidence: the table prints the identical value for MATH-500 and repeats 54.7% across three unrelated benchmarks, which looks like a template artefact; recorded but not relied on
- HLE (with tools): **62.1%** (RankLLMs, rank #1 claim); plain HLE: **no verified public score found**
- LCR / MLCR and CritPt: **no verified public score found** (AA-LCR and CritPt leaderboards cited with no exposed values)
- Artificial Analysis Intelligence Index and AA-Omniscience: **no verified public score found** (leaderboard cited without a value)
- Lumina indices: Capabilities **115.1** (#26, established, range 114.1–116.6), Reasoning **114.9** (#21, provisional), General **58.5** (#15), Agentic **107.6** (#13) — 22 retained native records across 16 evidence families (snapshot 2026-09-20); RankLLMs composite **53.2/100** (#27 of 85)

Coding:

- SWE-bench: **61.5%** (RankLLMs labels it "SWE-bench Verified … Pass@1" in the table and "SWE-Bench Pro" in its summary — harness ambiguous, recorded with that caveat)
- Lumina Coding Index **101.1** (#21, established); Terminal-Bench 2.1 **76.2%** / **80.0%**
- DeepSWE, LiveCodeBench, SciCode: **no verified public score found**; no vendor SWE-bench Verified figure was found for this ID

Long context:

- No MRCR/RULER retention figure was published for this ID; the 1M window rests on provider spec only.

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 88.1%, OSWorld-Verified 80.8% and an AA Coding Agents composite of 54.9 with a verified Terminal-Bench 2.1 of 76.2% are a genuinely strong agentic profile; capped by the total absence of verified Tau3-Banking/Claw-Eval numbers, a GDPval-AA of only 1371 Elo (frontier ref 1750+) and duplicate-value rows that make several claims unreliable.
- **Reasoning: 72/100.** Usable signals are HLE-with-tools 62.1% (rank #1 claim), Lumina's Reasoning Index 114.9 (#21) and a low-confidence GPQA of 62.1%; with plain HLE, CritPt and the AA index all unverified against cited-but-empty leaderboards, it cannot reach the 85+ band.
- **Context window: 94/100.** 1M input is the ≥1M tier, held at the floor: no retention measurement exists, max output is unpublished, and the vendor page exposed no context row.
- **Multimodal: 15/100.** Scored as text-only because **no modality row and no vision benchmark could be verified for this exact ID** — Meta's multimodal evaluations publicly cover Muse Spark 1.2 and 1.3, not 1.1. This is the largest uncertainty here and would move into the 60–85 range if a first-party modality card surfaces.
- **Coding: 78/100.** A 61.5% SWE-bench figure (Verified per the table, Pro per the summary) and a 101.1 Coding Index are respectable frontier-adjacent numbers, and Terminal-Bench 2.1 76.2% is verified; capped because DeepSWE, LiveCodeBench and SciCode are missing and the SWE harness itself is ambiguous.
- **Cost efficiency: 80/100.** $1.25–$1.58 per 1M input with a verified $1.44/task agentic cost is good value, but the missing published output price makes the score provisional; no free tier exists.
- **Overall Score: 68/100.** (82 + 72 + 94 + 15 + 78) / 5 = 68.2 → **68**. Best fit: agentic tool orchestration and long-context professional workflows on a paid API — verify vision and current pricing before committing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Lumina model profile and evidence log — Meta evaluation report, Artificial Analysis leaderboards, the verified Terminal-Bench 2.1 submission, BenchLM datasets — plus the RankLLMs aggregator table, whose repeated values were flagged rather than trusted); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
