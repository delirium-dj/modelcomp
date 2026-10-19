# MiniMax M2.5 — findings by Step 5 Preview

- Source: MiniMax/MiniMax-M2.5 (`MiniMaxAI/MiniMax-M2.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's Feb 2026 open-weight MoE (230B total / 10B active) trained with RL in "hundreds of thousands" of real-world agentic environments — positioned as a SOTA coding/agentic/search model at a tenth of frontier prices; later superseded by M2.7.
- **Provider / access:** Self-host weights — Hugging Face `MiniMaxAI/MiniMax-M2.5` (modified-MIT; 782,757 downloads last month; served by Novita among others); MiniMax API platform (`platform.minimax.io`) and MiniMax Agent. 8 API providers per Artificial Analysis. No OpenCode Zen route found (verified 2026-10-19).
- **Release / knowledge:** Released 2026-02-12 (Artificial Analysis FAQ; the card covers the late-Oct→Feb M2/M2.1/M2.5 cadence); knowledge cutoff not disclosed.
- **IDs:** `MiniMaxAI/MiniMax-M2.5` (HF/ModelScope) · `MiniMax-M2.5` (MiniMax API; an `M2.5-Lightning` speed tier is the same capability at 100 tok/s).
- **Context window:** ~205,000 tokens (Artificial Analysis; MiniMax markets ~200K). BenchLM lists 128K — treated as the API-capped/legacy figure, not the native window.
- **Modalities:** Text in → text out (official: text-only; no image input); reasoning with thinking; tool calling; interleaved thinking.
- **Pricing (as of 2026-10-19):** Official card: M2.5 (50 tok/s tier) "costs half" of M2.5-Lightning's $0.30/$2.40 per MTok → ~$0.15/$1.20; Artificial Analysis measured $0.30/$1.20 (input price conflicts with the card — both listed); ~90% cache discount; blended ~$0.20/MTok (AA).
- **Architecture:** Open weights (modified-MIT); MoE — 230B total / 10B active; trained on 10+ languages across 200,000+ real-world environments; Forge agent-native RL framework (CISPO algorithm, process rewards).

### Raw benchmarks found

> MiniMax publishes vendor numbers (Claude-Code-scaffolded, averaged over runs) and Artificial Analysis measures independently; HF leaderboard eval-results give a third cross-check. Conflicts kept (e.g. SWE-bench Verified 80.2% vendor vs 75.8% leaderboard-verified).

Agent / tool use:

- BrowseComp: **76.3%** (official, with context management) — the headline search result
- IFBench: **70.0%** (official) — instruction following
- GDPval-MM (internal office/knowledge-work eval): **59.0% average pairwise win rate** vs mainstream models (official; internal benchmark)
- APEX Agents: **6.2%** (Mercor leaderboard, via HF eval results) — very weak on this long-horizon professional-tasks eval
- Wide Search / RISE (internal search evals): claimed "industry-leading" with ~20% fewer agentic rounds than M2.1 — no public numbers
- Terminal-Bench 2 / Tau3-Banking / MCP-Atlas / Toolathlon / GDPval-AA: **no verified public score found** (vendor charts are images)

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (official; matches the HF eval-result entry 85.2)
- HLE (no tools): **19.4%** (official; HF eval-result entry also 19.4)
- AIME 2025: **86.3%** (official)
- SciCode: **44.4%** (official)
- AA-LCR: **69.5%** (official, long-context reasoning)
- MMLU-Pro: **80.1%** (TIGER-Lab leaderboard eval result, via HF)
- Artificial Analysis Intelligence Index: **23** (estimated, deprecated listing; #41/121 in its open-weight class, class median 19)

Coding:

- SWE-bench Verified: **80.2%** (official, Claude Code scaffold, avg of 4 runs) — also **75.8%** on the SWE-bench leaderboard-verified eval result (HF); harness generalization: Droid 79.7% and OpenCode 76.1%, both above Claude Opus 4.6's 78.9/75.9 on the same scaffolds
- SWE-bench Pro: **55.4%** (ScaleAI leaderboard eval result, via HF)
- Multi-SWE-bench: **51.3%** (official)
- SciCode: **44.4%** (official; see reasoning)
- Vibe Code Bench: **14.85%** (Vals AI, via BenchLM) — weak
- VIBE-Pro (internal): "on par with Opus 4.5" (official; no number)
- DeepSWE / LiveCodeBench / Terminal-Bench 2: **no verified public score found** (vendor charts are images)

Long context:

- ~205K window (AA); AA-LCR 69.5% is the closest long-context number; no MRCR/RULER/GraphWalks retrieval-at-window pass rate published.

Speed / cost (official + AA): served at 50 tok/s (M2.5) or 100 tok/s (M2.5-Lightning); SWE-bench Verified run in 22.8 min avg vs Opus 4.6's 22.9 min at ~10% of the cost; AA measured 69.9 tok/s and 1.41 s TTFT on the MiniMax API.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 76.3% (with context management) and IFBench 70.0% are strong upper-mid agentic results and GDPval-MM posts a 59% win rate, but APEX Agents 6.2% is near-floor on long-horizon professional tasks and no Terminal-Bench/Tau3/MCP-Atlas figure exists — capping it below the 85+ tier.
- **Reasoning: 70/100.** GPQA Diamond 85.2% and AIME 86.3% clear the mid band, HLE 19.4% is above the mid reference, but the composite Intelligence Index of 23 sits mid-pack and SciCode 44.4% is mid — an upper-mid reasoning profile without frontier evidence.
- **Context window: 74/100.** ~205K-token window (AA) — just inside the methodology's 200K–500K band (65–84) at its lower end; AA-LCR 69.5% supports mid-band, and no retrieval-at-length figure lifts it.
- **Multimodal: 15/100.** Text-only input and output (official card; AA confirms no image input) — squarely in the methodology's text-only 10–20 band.
- **Coding: 78/100.** SWE-bench Verified 80.2% (75.8% leaderboard-verified) with cross-harness generalization above Opus 4.6 is a strong showing, but Vibe Code Bench 14.85%, SciCode 44.4% and unpublished DeepSWE/LiveCodeBench keep it out of the 90+ frontier tier.
- **Cost efficiency: 95/100.** ~$0.15–0.30/$1.20 per MTok (card vs AA pricing conflict noted) with ~90% cache discount and open weights — near the methodology's ~$0.10/$0.20 → 97–99 anchor, and the vendor's own claim of one-tenth frontier per-task cost is consistent with AA's $0.20 blended rate.
- **Overall Score: 63/100.** Mean of 76/70/74/15/78 = 62.6 → 63. Best fit: the value pick for agentic coding and search-heavy work — SWE-bench-class results and BrowseComp 76% at ~$0.15–0.30/$1.20 with self-hostable weights — while accepting text-only I/O and weak long-horizon professional-task (APEX) performance.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official MiniMax model card (Hugging Face, appendix benchmark table + harness notes) cross-checked against Artificial Analysis (deprecated listing, speed/latency/pricing), BenchLM (Vals AI Vibe Code Bench) and HF leaderboard eval-results; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
