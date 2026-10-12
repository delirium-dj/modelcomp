# GPT-5.4 Pro — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.4-pro`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's max-performance pro tier of the GPT-5.4 generation ("maximum performance on complex tasks") — parallel test-time compute on the GPT-5.4 base (same relation as 5.5 Pro to 5.5), the family that first brought native computer use and tool search to the mainline. Second-pass historic note: GPT-5.4 Pro was the **first AI to solve a genuine open mathematics problem** — a Ramsey-hypergraph problem from Epoch's FrontierMath, unsolved since 2019, elicited by Kevin Barreto and Liam Price, confirmed by problem contributor Will Brian and independently verified by Epoch AI for publication (2026-03-24; Claude Opus 4.6 and Gemini 3.1 Pro later solved it too). Superseded by GPT-5.5 Pro at the same price.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); ChatGPT Pro/Enterprise; Codex; OpenCode Zen `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.4-pro`); 4 providers via cloudprice. Composite trackers: BenchLeader **63.6, #60 of 760** (trend 57→68 rising; last measured 7 Oct 2026), BenchLM **68.93, #19 of 889** (11 rows — thin), Epoch Capabilities Index **158.9 #13**.
- **Release / knowledge:** released 2026-03-04/05. Knowledge cutoff not published.
- **IDs:** `gpt-5.4-pro`; Zen `opencode/gpt-5.4-pro`. No Free ID on Zen.
- **Context window:** **1.05M tokens** (OpenAI model docs; standard API window 272K with the 1M window supported; **prompts >272K priced at 2x input / 1.5x output; regional data-residency endpoints +10%** — second-pass pricing facts).
- **Modalities:** text and image input, text output; vision with full-fidelity `original` detail level (up to 10.24M pixels); reasoning (xhigh in official evals); tool calls; native computer use via the `computer` tool; tool search; JSON mode.
- **Pricing (as of 2026-10-12):** $30 / $180 per MTok in/out (official and Zen; Zen cached read $30). No free tier. Zero data retention available (abuse-monitored, per Opper). Latency is the second-pass headline negative: **6-10 tok/s output** (BenchLeader/OpenRouter — slowest tracked), ~$0.066 per chat reply, ~4.3 min per code edit, **~11.2 min per agentic coding session** at list speed.
- **Architecture:** proprietary, size undisclosed; parallel test-time compute on the GPT-5.4 base; rated High cyber capability under OpenAI's Preparedness Framework with corresponding safeguards; low Chain-of-Thought controllability (positive monitorability property, official).

### Raw benchmarks found

> Pro-variant rows are marked (Pro). Unmarked Pro rows are absent from public tables; family evidence (GPT-5.4 base, official) is listed only as clearly-labeled family context.

Agent / tool use:

- BrowseComp: **89.3% (Pro)** (official; state of the art at release)
- GDPval (wins or ties): **82.0% (Pro)** (official); FinanceAgent v1.1: **61.5% (Pro)**; Investment Banking Modeling Tasks: **83.6% (Pro)** (official)
- Terminal-Bench 2.0: no Pro row (family base: 75.1%); OSWorld-Verified: no Pro row (family base: 75.0%, then-SOTA, above the 72.4% human rate); Toolathlon: no Pro row (family base: 54.6%); MCP Atlas: no Pro row (family base: 67.2%); Tau2-bench Telecom: no Pro row (family base: 98.9%)
- Claw-Eval / ClawProBench: no verified public score found (unchanged)
- No independent agent-board rows for this ID exist (BenchLeader carries zero Agents & tools rows — unchanged from 2026-10-01)

Reasoning / knowledge:

- GPQA Diamond: **94.4% (Pro)** official / **94.6% #6** (Epoch, xhigh — rank revealed this pass: top-10)
- HLE: no tools **42.7% (Pro)** / with tools **58.7% (Pro)** (official); HLE (Scale/CAIS board): **44.3% #5** (effort not stated — top-5)
- **FrontierMath — CONFLICT RESOLVED:** Epoch AI's own pre-release evaluation (substack, 2026-03-05) pins **Tiers 1-3: 50.0% / Tier 4: 38.0% (Pro)** — then a new record; BenchLeader's later xhigh re-run shows **82.5% #13 / 58.5% #21** (different effort/harness, flagged, not canonical); llmlearner: "the best independently measured result is GPT-5.4 Pro's 50.0"
- MathArena Apex: **69.3-69.8% #3** (behind only Opus 4.8's 81.3% at the time); SimpleBench: **74.1% #10**; Chess Puzzles: 58.6% #6
- ARC-AGI-1: **94.5% #35** (Verified); ARC-AGI-2: **83.3% #34** (Verified, xhigh — board has since saturated above it)
- CritPt: **30.0% — #15** (AA, xhigh — rank revealed this pass: top-15, resolving the 2026-10-01 "soft spot" read)
- FrontierScience Research: **36.7% (Pro)** (official); IPhO 2025 Theory: **93.5%** (Meta comparison chart via BenchLM)
- Knowledge/IF (Scale SEAL, effort not stated): MultiNRC **62.3% #4**, TutorBench **56.6% #2**, MultiChallenge **69.2% #5**, SimpleQA Verified 46.3% #35; FORTRESS 14.8% #54; MASK **91.7% #7**
- Factual error rates (family base): individual claims 33% less likely false vs GPT-5.2; responses 18% less likely to contain any error (official)
- Composites: BenchLM 68.93 #19; BenchLeader 63.6 #60 (Knowledge 74 its best category); Epoch ECI **158.9 #13**

Coding:

- SWE-Bench Pro: no Pro row (family base: 57.7%); Terminal-Bench 2.0 (family base): 75.1% (GPT-5.3-Codex sibling: 77.3%)
- WeirdML: 57.4% #53 (no-reasoning setting — the only independent coding row, off-effort)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (unchanged)

Long context:

- No Pro-specific rows; family base GPT-5.4: MRCR v2 8-needle 512K-1M **36.6%**, 256K-512K 57.5%; GraphWalks BFS 256K-1M 21.4% (official) — the 1M window is supported but retrieval degrades steeply in its upper half (unchanged).

Multimodal (grounding):

- **VISTA: 53.9% #2** (Scale SEAL, effort not stated — new this pass; top-2 visual-language understanding) — the strongest quality evidence in the image-in band alongside the full-fidelity 10.24M-pixel `original` detail level; no Pro-specific MMMU rows (family base: MMMU-Pro 81.2% no tools / 82.1% with tools).

### Normalized scores (1–100)

- **Tool use: 86/100.** Held: the Pro-measured rows (BrowseComp 89.3% SOTA-at-release, GDPval 82.0%, FinanceAgent 61.5%, IB Modeling 83.6%) plus the family's OSWorld 75.0%/Tau2 98.9% remain the whole evidence base — no independent agent-board rows for this ID appeared in the second pass either.
- **Reasoning: 90/100.** Held, with the cap rewritten: the 2026-10-01 "CritPt soft spot" is resolved (30.0% is #15), and new top-10 reveals (GPQA #6, MathArena Apex #3, SimpleBench #10, HLE #5 on the Scale board, ECI #13) corroborate the frontier band — anchored by the FrontierMath open-problem first. Remaining caps: the canonical FrontierMath 50/38 (strong for its date, now mid-board), ARC-AGI-2 #34 on a saturated board, and the thin overall coverage (11 BenchLM rows).
- **Context window: 88/100.** Held: 1.05M window (≥1M tier) but family MRCR at 512K-1M is 36.6% — far from the 98% bar; the >272K 2x/1.5x surcharge further discourages full-window use.
- **Multimodal: 66/100.** Raised from 65: VISTA 53.9% #2 is the first top-tier independent vision-quality row for this ID, complementing the 10.24M-pixel full-fidelity input; still capped in the image-in band by no video/audio input and no Pro-specific MMMU rows.
- **Coding: 82/100.** Held: still zero direct Pro coding rows (WeirdML 57.4% at the off-effort no-reasoning setting is the lone independent row); the family profile (SWE-Pro 57.7%, TB2.0 75.1%) and Pro's strictly-higher positioning keep the score, the thin evidence caps it.
- **Cost efficiency: 15/100.** Held: $30/$180 — identical to GPT-5.5 Pro, which supersedes it; the second pass adds that this is now among the slowest models tracked (6-10 tok/s; ~11-minute agentic sessions), so the token economics are worse than the price alone suggests.
- **Overall Score: 82/100.** Half-up mean of the five quality dims: (86 + 90 + 88 + 66 + 82) / 5 = 82.4 → 82 — unchanged from 2026-10-01; the second pass resolved the CritPt misread, confirmed the canonical FrontierMath values, added the open-problem first and VISTA #2, but the Pro variant's independent coverage remains thin. Research-grade reasoning at ultra-premium cost with elite-level latency pain: historically significant (the first AI open-problem solve), operationally superseded by GPT-5.5 Pro at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-10-01 report (OpenAI GPT-5.4 announcement/evals tables and model docs, Epoch AI's own FrontierMath record post — resolving the FrontierMath band conflict — and the open-problem coverage via agent-wars/lilting/winbuzzer, BenchLeader data as of 2026-10-12, BenchLM composite via its October snapshot, ARC Prize verified results, Scale SEAL boards, MathArena, Artificial Analysis CritPt; three web-search attempts, two successful plus the BenchLeader/BenchLM fetches; corroborating listings: llmlearner ×2, cloudprice, opper, computecomparison, datalearner); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
