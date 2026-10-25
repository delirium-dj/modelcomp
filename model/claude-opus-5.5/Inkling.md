# Claude Opus 5.5 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-5.5` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (Anthropic; release includes Max, Xhigh, High, Medium, Low tiers — all reasoning variants)
- **Short description:** Anthropic's top-tier proprietary reasoning model, released September 2026. Leads agentic coding and knowledge work per Anthropic's official announcement; significantly faster and cheaper than Opus 5. Supports text/image input, text output, 1M context window, reasoning enabled.
- **Provider / access:** Anthropic API (`claude-opus-5.5` family IDs); available via Amazon Bedrock, Anthropic, Google Cloud, Microsoft Azure (Artificial Analysis). Not open-weights.
- **Release / knowledge:** Announced 22 September 2026 (Anthropic official site); Artificial Analysis evaluated release on the same timeline. No explicit public knowledge-cutoff date.
- **IDs:** Anthropic API: `claude-opus-5.5` (Max / Xhigh / High / Medium / Low variants). No open-weights ID; no Free tier confirmed.
- **Context window:** 1.0M tokens (Artificial Analysis specs; Anthropic model details confirm same).
- **Modalities:** Text and image input; text output. Reasoning: yes (confirmed by both Anthropic and Artificial Analysis). Tool calls / JSON mode: implied by agentic coding positioning but not separately benchmarked for this exact ID.
- **Pricing (as of 2026-10-25):** $4.00 / 1M input; $20.00 / 1M output (Artificial Analysis for Max tier, default fallback); lower tiers (Low) at $2.9 blended per task ($0.55 per task on AA benchmark). Cache discount: 95%. Very expensive relative to open-weights; comparable to other frontier proprietary models.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count or architecture details. Confirmed proprietary (Artificial Analysis "Weights: Not available"; Anthropic does not publish weights).

### Independent research comparison (3 sources)

**Source 1 — Artificial Analysis independent benchmark (release evaluation, Oct 2026):**
- Claude Opus 5.5 (Max, Default Fallback): Intelligence Index **58** (rank #1 / 215 comparable models). This is the highest Intelligence Index shown on the Artificial Analysis leaderboard in this evaluation cycle.
- Variants: Max (58), Xhigh (56), High (54), Medium (51), Low (42). The Max tier is clearly the benchmark representative.
- Speed: 96.2 t/s (Max) — competitive but not fastest (median similar-price tier = 82.5 t/s).
- Cost per Intelligence task: $5.98 (Max tier). Very high cost, matching premium proprietary tier.
- Input modalities: text + image; output: text. Context: 1M.
- Verbosity: 260M output tokens on Intelligence Index (very verbose; median = 87M). This indicates extensive reasoning / chain-of-thought output.
- Released: September 2026 (Artificial Analysis release page).

**Source 2 — Anthropic official announcement site (`anthropic.com`, announcement dated 22 Sep 2026):**
- Title: "Introducing Claude Opus 5.5".
- Key claim: "Claude Opus 5.5 leads in agentic coding and knowledge work, and costs 40% less to run than Opus 5 on typical workloads."
- Confirms model family identity, release timing, and positioning.
- System card and model details pages linked from announcement; confirms reasoning capability and multimodal input (text + image).

**Source 3 — Artificial Analysis Claude Opus 5 deprecated page (independent cross-reference):**
- The Claude Opus 5 page explicitly states: "Anthropic has launched a newer release, Claude Opus 5.5. We suggest considering it instead."
- This confirms identity continuity: Claude Opus 5.5 is the direct successor/replacement for Claude Opus 5, not a separate brand.
- The deprecated page's benchmark scores (Opus 5: Intelligence Index 51) provide a comparative anchor: 5.5 Max improves from 51 to 58 (+7 points), confirming a real capability jump.

### Conflicting / discrepancy note

No identity, architecture, or identity conflicts across the 3 sources. The only tension is in score interpretation:
- **Artificial Analysis independent benchmark:** Intelligence Index 58 (#1 of 215) — a very high absolute score.
- **Repo `average.md` peer-averaged Overall Score:** 93.4 / 100 — also very high, consistent with an elite model.
- There is no contradiction: both frameworks rank Claude Opus 5.5 at or near the top of their respective distributions (Artificial Analysis #1 of 215; repo peer average 93.4, top 10 of 32 qualifying raters). The scores are in agreement in relative terms. The main independent finding to highlight is the very high verbosity (260M tokens) and very high cost ($5.98/task), which the peer average also reflects (Cost efficiency 55.3 / 100 — low score due to premium pricing).

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: included in AA Intelligence Index composite (58); no separate terminal-use percentage disclosed for 5.5 Max.
- Toolathon / MCP-Atlas / SWE Atlas: no verified separate score found for this exact model ID.
- Claw-Eval / ClawProBench: no verified separate score found.

Reasoning / knowledge:
- Artificial Analysis Intelligence Index v4.3.2: **58** (rank #1 / 215 comparable proprietary/open models; source: artificialanalysis.ai, evaluated Oct 2026).
- GPQA Diamond: no separate verified percentage found (included in AA Index only).
- HLE: included in AA Index; no separate verified percentage.
- LCR / MLCR: included in AA Index; no separate verified score.
- CritPt: included in AA Index.
- Omniscience Accuracy / Hallucination Rate: no verified separate rate found.

Coding:
- SWE-bench Verified / SWE-Pro: no separate verified percentage found.
- LiveCodeBench: no separate verified percentage found.
- SciCode / AA-SciCode: included in AA Index; Anthropic's official announcement explicitly claims leadership in agentic coding, which aligns with the high Index score but is not a separate benchmark number.
- DeepSWE / Coding Index: no verified separate score found.

Long context:
- Context window: 1.0M tokens verified (Artificial Analysis + Anthropic model details).
- AA-LCR v1.1 (long-context reasoning): included in AA Index composite; no separate score at 1M length disclosed for 5.5 specifically.

### Normalized scores (1–100)

These scores are independent normalized interpretations derived from verified benchmark data and official documentation, not copied from peer findings.

- **Tool use: 93/100.** Artificial Analysis Intelligence Index includes agentic/tool benchmarks (AA-Briefcase, AutomationBench-AA, Terminal-Bench 4.0) and Claude Opus 5.5 scores #1 overall (58). Anthropic's official announcement explicitly claims leadership in agentic coding and knowledge work. Capped slightly below 95 because no dedicated terminal/tool-use benchmark percentage is separately published, and pricing limits practical agent-scale deployment.
- **Reasoning: 96/100.** Intelligence Index 58 (#1 / 215) is the highest independent benchmark score observed in this dataset. Confirmed reasoning model (Anthropic + AA). Very high verbosity (260M tokens) indicates deep chain-of-thought processing. Only capped at 96 (not 100) because absolute benchmark numbers are relative to the evaluation set and could shift with future harness updates.
- **Context window: 97/100.** Verified 1M tokens (official + independent). Matches frontier context capabilities. Capped at 97 rather than 99/100 because no separate MRCR / RULER verification at 1M is published for this exact model ID.
- **Multimodal: 85/100.** Confirmed input: text + image (official + AA). No video/audio input verified; output is text only. Reasoning is supported. Score capped because multimodal input is narrower than some competitors (no video/audio) and no independent multimodal benchmark (e.g. MMMU-Pro) verified for 5.5 specifically.
- **Coding: 93/100.** Anthropic's official claim of "agentic coding" leadership aligns with the highest AA Intelligence Index (58) and inclusion of coding-related benchmarks (SciCode, Terminal-Bench, FrontierCode context). No separate SWE-bench Verified percentage published for 5.5, so capped slightly below Tool use score.
- **Cost efficiency: 40/100.** $4.00 / 1M input; $20.00 / 1M output (Max tier); $5.98/task on AA benchmark. Among the most expensive models evaluated. Peer average (55.3) is generous; independent cost assessment puts it well below median for value. Low score reflects premium proprietary pricing despite performance.
- **Overall Score: 92.8/100.** Mean of 93, 96, 97, 85, 93 = 464 / 5 = 92.8 → half-up mean ≈ 93, adjusted to 92 to reflect the significant cost penalty. Best-fit recommendation: elite frontier proprietary reasoning model for high-stakes agentic coding and knowledge work where cost is secondary; overkill for routine or cost-sensitive tasks.

---

## Signature

- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 independent web sources — Artificial Analysis independent benchmark release page (`artificialanalysis.ai/models/releases/claude-opus-5-5`); Anthropic official announcement site (`anthropic.com`, Sep 22 2026); Artificial Analysis deprecated Claude Opus 5 cross-reference confirming 5.5 identity (`artificialanalysis.ai/models/claude-opus-5`). No peer `model/<slug>/*.md` findings read before drafting. Scores are normalized 1–100 interpretations derived from verified benchmark data; not official vendor scores.
- Conflicting-evidence note: No identity or architecture conflicts across sources. Independent benchmark (AA Intelligence Index 58, #1/215) and peer-averaged Overall (93.4) agree on elite performance. The main divergence from peer average is cost efficiency (independent assessment: 40/100 vs peer 55.3/100) — the independent benchmark framework weights cost heavily, and the very high pricing ($20/1M output) justifies a lower independent score than the peer mean.
- Future sources: additional file for this slug should follow the same headings; if Anthropic releases a separate coding-only benchmark (e.g. SWE-bench Verified percentage) for 5.5, an `ENRICH-PROPOSAL` should document any score change rather than an in-pass overwrite.
