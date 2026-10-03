# MiniMax M3.1 Flash Preview — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiniMax M3.1 Flash Preview
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE WARNING:** MiniMax published **no benchmarks, no model card, no parameter count, no per-token price, and no weights** for M3.1-Flash-Preview (quiet launch 2026-09-27). The model is absent from Artificial Analysis's index (BenchLM: 0 of 645 benchmarks covered). The only independent measurement captured is AICodeKing's KingBench 3 (66.25%). Circulating figures (73.8% SWE-bench Verified, 165 t/s, $0.10/M input) trace to no primary source and are treated as unverified.

## Model card

- **Name:** MiniMax-M3.1-Flash-Preview (first M3.1 model; positioned as a "frontier multimodal coding model" for everyday coding and agent work)
- **Short description:** MiniMax's September 2026 preview — a 1M-context multimodal coding model with always-on adaptive thinking (cannot be disabled) and five tunable effort levels, gated to the Token Plan subscription and MiniMax Code; no pay-as-you-go API, no third-party routing, no open weights.
- **Provider / access:** MiniMax — Token Plan only (Plus $22/mo, Max $55/mo, Ultra $132/mo; 5-hour rolling + weekly quotas; annual $220/$550/$1,320) and MiniMax Code (free quota; check-in promotion doubling daily credits 2026-09-28 → 10-07). Purchased credits run 1,000 credits/$1 and deduct at each model's pay-as-you-go list rate — but no list rate exists for this model. Not on pay-as-you-go, not on third-party routers, not on OpenRouter.
- **Release / knowledge:** 2026-09-27 (quiet; no announcement, no changelog entry at launch per HokAI). Knowledge cutoff not captured.
- **IDs:** `MiniMax-M3.1-Flash-Preview`; repo folder `minimax-m3.1-flash-preview`.
- **Context window:** 1,000,000 tokens (vendor docs; same ceiling as MiniMax-M3).
- **Modalities:** Text, image, video in; text out (plus a separate reasoning stream). Thinking always on — `thinking: {type: "disabled"}` or `effort: "none"` returns HTTP 400 ("requires adaptive thinking"); effort levels low/medium/high/xhigh/max, default max.
- **Pricing (as of 2026-10):** No per-token price published anywhere. Access economics are subscription-only ($22–132/mo). Sibling MiniMax-M3 (for reference, not this model): $0.30/$1.20 per 1M (≤512K), $0.60/$2.40 (>512K), cached $0.06/$0.12, Priority tier 1.5×.
- **Architecture:** MiniMax's own tools guide (agent.minimax.io) lists a mixture-of-experts architecture with 428B total / ~23B active parameters, sparse attention, and a native visual encoder — but multiple independent guides warn that "428B" may be borrowed from the parent line, and other sources state the parameter count is undisclosed. M3-generation architecture (MiniMax Sparse Attention): 28.4× lower per-token attention FLOPs, 14.2× faster prefill, 7.6× faster decoding at 1M vs GQA (M3 numbers, not verified for M3.1).
- **Speed:** ~150 t/s (vendor tools guide, "approximately"); day-one testers measured 90–110 t/s decode (AJ via eesel; "faster than MiMo-v2.6-flash, slower than deepseek-v4.1-flash"); M3 is listed at ~100+ tps.

### Raw benchmarks found

- **Official: none.** No benchmark table, model card, or system card; absent from AA's model index; BenchLM coverage 0/645, unranked.
- **AICodeKing KingBench 3** (independent, 2026-09-28; eight build-it-from-scratch coding tasks scored /10 each): M3.1 Flash **53/80 (66.25%)**; best in the same run: Claude Opus 5.5 at 93.75%. Strengths: 3D geometry (9/10 on a folding-table task with smooth animated 3D geometry). Weaknesses: interactive simulations — an elevator simulation crashed on load (position value called as a function, 3/10); an archery game drew targets in the wrong place and paused its timer between shots (4/10).
- **Unverified circulating figures (no primary source):** 73.8% SWE-bench Verified, 165 t/s, $0.10/M input — excluded from scoring.
- Sibling MiniMax-M3 results (vendor-reported, NOT M3.1): SWE-bench Verified 80.5%, SWE-bench Pro 59.0%, Terminal-Bench 2.1 66.0%, MCP Atlas 74.2%, BrowseComp 83.5, OSWorld-Verified 70.06; AA Intelligence Index high-20s to ~30 (Sept snapshots).

## Scores

- **Tool use: 49/100.** No verified public score found. Tool use and agentic execution are the stated positioning (MiniMax Code integration), but no Tau-bench/MCP-Atlas/Toolathlon measurement exists; KingBench 3 is a build-task suite, not a tool-use benchmark; neutral midpoint.
- **Reasoning: 49/100.** No verified public score found. Always-on adaptive thinking with five effort levels is documented behavior, not measurement; no GPQA/HLE/AIME run exists; neutral midpoint.
- **Context window: 85/100.** 1M tokens claimed by vendor docs (same ceiling as M3, which uses MiniMax Sparse Attention); no retrieval-quality benchmark (MRCR-class) published for M3.1; scored on the claimed window without retrieval evidence.
- **Multimodal: 60/100.** Text, image, and video input with a native visual encoder (per the vendor tools guide); no MMMU/MathVista-class score published; scored on documented capability, not measurement.
- **Coding: 56/100.** One independent measurement: KingBench 3 at 66.25% (8 build tasks; strong 3D geometry, weak interactive simulations); positioned as a coding model with no SWE-bench/Terminal-Bench/LiveCodeBench verification; scored slightly above neutral on the single independent run.
- **Cost efficiency: 85/100.** Not $/M-based (no published rate): subscription-gated at $22–132/mo with free-at-the-margin usage for subscribers and MiniMax Code free quota; the M3 sibling's $0.30/$1.20 suggests the tier will price cheap when a rate card lands; scored on access economics with the caveat flagged.
- **Overall Score: 59.8/100.** Mean of Tool use 49, Reasoning 49, Context window 85, Multimodal 60, Coding 56 = 59.8 (Cost efficiency excluded per methodology).

> **Gap vs folder average (71.2): −11.4.** Expected for a zero-official-benchmark preview: peers appear to have extrapolated from the M3 sibling's table (SWE-bench Verified 80.5% etc.), which MiniMax explicitly does not carry over ("no 3.1 baselines exist and M3 numbers should not be reused as targets" per pre-launch partner notes). The only M3.1-specific evidence — KingBench 3 at 66.25% — is scored here and nothing else was invented.

## Notes

- Verification trail: MiniMax API docs (model table, effort levels, HTTP-400 adaptive-thinking behavior, Token-Plan-only note), agent.minimax.io tools guide (428B/23B, sparse attention, native visual encoder, ~150 t/s, 1M context), orcarouter (2026-09-27 launch coverage: no price/benchmarks/weights/AA entry, Token Plan tiers), threatfrontier (KingBench 3 66.25% run detail, unverified-figure warning), HokAI (no model card/changelog entry, pay-as-you-go absence), eesel (day-one 90–110 t/s decode, MSA efficiency numbers are M3-generation), SaaSCity (M3 comparison table, Token Plan pricing), BenchLM (0/645 coverage).
- Known conflicts: 428B/23B architecture (vendor tools guide) vs "parameter count not disclosed" (multiple guides); ~150 t/s (vendor) vs 90–110 t/s (day-one testers); Token Plan pricing-page footnote still lists M3/M2.7/image/speech and omits M3.1-Flash-Preview (vendor documentation inconsistency, live as of 2026-09-27).
- Open questions: a published per-token rate and pay-as-you-go API id; the first AA entry; whether weights ship (M3 was open-weight); KingBench 3 replication.
- Future sources: MiniMax's M3.1 stable release, AA index entry, third-party harness runs, Token Plan rate card.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash MiniMax M3.1 Flash Preview Overall=59.8 (Tool=49 Reasoning=49 Context=85 Multimodal=60 Coding=56 Cost=85; zero official benchmarks; KingBench 3 66.25% only)`
