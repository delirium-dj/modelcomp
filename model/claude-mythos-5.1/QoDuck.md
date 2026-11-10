# Claude Mythos 5.1 — findings by QoDuck

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's gated "research instrument" — the *same weights* as Claude Fable 5.1 with a lighter cyber / life-sciences safeguard grade, reserved for vetted professionals. **Variant flag:** this is a safeguard/access variant of `claude-fable-5.1` (identical model, distinct vendor ID `claude-mythos-5-1` and a separate tracked queue folder), NOT a phantom checkpoint or a price-tier duplicate. The only capability figure Anthropic publishes specifically for Mythos is Terminal-Bench 4.0; everything else is shared-weights evidence from Fable.
- **Provider / access:** Claude API `claude-mythos-5-1` (Messages API); Amazon Bedrock `anthropic.claude-mythos-5-1` (geo `us.anthropic.claude-mythos-5-1`, global `global.anthropic.claude-mythos-5-1`; Messages / Converse / Invoke); also Google Cloud Vertex AI and Microsoft Foundry. **Gated:** US-only organizations verified through Anthropic's Cyber Verification Program (now includes former Project Glasswing members) or the Life Sciences Verification Program (US-gov partnership). Bedrock lists it as a Preview/"Beta Service" (EOL no sooner than 2027-09-01) and requires a `provider_data_share` retention opt-in (EFS retention layer).
- **Release / knowledge:** Released 2026-09-01 (successor to Mythos 5 / Mythos Preview); knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-1` (Claude API), `anthropic.claude-mythos-5-1` (Bedrock). **No Free ID exists on OpenCode Zen** — the model is verification-gated, so a public Zen route is unverified/likely absent; no `opencode/...` Free listing was found.
- **Context window:** 1M tokens total (1,048,576); max output 128K tokens. Verified directly against the Claude Platform docs model overview ("Context window: 1M tokens; Max output: 128K tokens") and the AWS Bedrock model card.
- **Modalities:** Text + image in → text out. No audio/speech/video input or non-text output. Reasoning: yes — adaptive thinking always on (effort levels low / medium / high / xhigh / max; default **high**). Tool calls: yes (forced/required tool use still returns HTTP 400, same as Fable). JSON mode: yes. Bedrock API constraints: `temperature` must be 1.0 or unset, `top_p` 0.99 or unset, no `top_k`; Mythos skips the thinking-block prefix check that Fable enforces, and Fable 5.1 / Mythos 5.1 can read each other's thinking blocks.
- **Pricing (as of 2026-11-09):** Paid, gated — **$10 / $50 per 1M** (input / output), identical to Fable 5.1. Cache read **$0.25**/1M; cache writes $12.50 (5-min) / $20 (1-hour); Batch API 50% off. Corroborated by AI/TLDR ($10 in / $50 out) and ngai.solutions (cache reads $0.25/MTok). No free tier; access requires verification + retention opt-in.
- **Architecture:** Proprietary; identical weights to Claude Fable 5.1 (Anthropic does not disclose parameter counts). The differentiator is the safeguard grade and the trusted-access regime, not the network.

### Raw benchmarks found

> Mythos 5.1 is verification-gated, so independent third-party testing is essentially absent. Anthropic publishes exactly one Mythos-specific standardized number (Terminal-Bench 4.0). All other capability evidence below is either (a) shared-weights proxy from Fable 5.1, marked provisional, or (b) qualitative life-sciences demonstrations — never invented.

Agent / tool use:

- Terminal-Bench 4.0 (**group**): **60.9%** — vendor-reported by Anthropic; frontierlog.ai shows a human checked this number against its source on 2026-10-19. This is the **only** benchmark Anthropic publishes specifically for Mythos 5.1. For comparison, Fable 5.1's vendor-reported TB4 is 55.8% — the +5.1-point gap is the *safeguard tax* (Mythos completes dual-use terminal tasks Fable refuses), not a capability difference.
- GDPval-AA: **no Mythos-specific published score found** — provisional proxy from Fable 5.1 (same weights): GDPval-AA v2 **1853** Elo / v2.1 **1735** Elo (version conflict noted under Fable).
- Tau3-Banking / Tau2-Bench: **no verified public score found** for Mythos 5.1.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no Mythos-specific published score found** — same-weights proxy from Fable 5.1 (provisional).
- HLE: **no Mythos-specific published score found** — Fable proxy (provisional).
- Artificial Analysis Intelligence Index: **no Mythos row** (gated, not independently indexed). Shared-weights Fable 5.1 vintage: **66 at launch → ~53 current** (AA rescaling drift; provisional proxy only).
- LCR / MLCR / CritPt / Omniscience / Hallucination Rate: **no verified public score found** for Mythos 5.1.

Coding:

- SWE-bench Verified / SWE-Pro: **no Mythos-specific published score found** — Fable 5.1 same-weights proxy (provisional).
- Terminal-Bench-Science 0.1: **52.6% belongs to Fable 5.1, NOT Mythos** — Anthropic publishes no Mythos-specific TB-Science figure; do not attribute.
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found** for Mythos 5.1.
- AA Terminal-Bench v4.0 board (independent harness): Fable 5.1 (High) **52.0%** on the 66-task release with mini-SWE-agent v2.4.6 — a *different harness* from Anthropic's vendor Claude Code run, and there is **no Mythos row** on the AA board.

Long context:

- **No long-context retrieval figure reported for Mythos 5.1.** 1M window confirmed by the Claude Platform docs + Bedrock card, but no MRCR / RULER / GraphWalks measurement at length is published for this ID.

Qualitative life-sciences / cyber demonstrations (Vellum; not standardized benchmarks):

- Protein-binder design success ~**50%** vs a 10–15% field norm; Venus elevation mapping at 2–3 km resolution; custom GPU kernels sped genomics models up to **2.5×**. These illustrate the lighter-safeguard research use case, not comparable leaderboard scores.
- Respan: **no independent third-party Mythos 5.1 test results** located. AISI evaluated the older *Mythos Preview* (April 2026), not 5.1.

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Because Mythos shares Fable 5.1's weights, Reasoning / Context / Multimodal mirror Fable; Tool use and Coding take a modest lift for the safeguard-free Terminal-Bench 4.0 result (60.9% vs Fable's 55.8%). Cost is identical to Fable. Overall = half-up mean of the five quality dims (Cost excluded).

- **Tool use: 93/100.** Vendor Terminal-Bench 4.0 **60.9%** is the strongest published Anthropic agentic-terminal figure for the 5.1 pair (Mythos > Fable 55.8% because lighter safeguards let it finish dual-use terminal tasks); GDPval-class capability is shared with Fable (1853/1735 Elo proxy). Capped below 95 by the absence of any independent Mythos run and the vendor-harness caveat (AA's mini-SWE-agent board puts Fable at 52.0%).
- **Reasoning: 93/100.** Identical weights to Fable 5.1 → same GPQA/HLE-class reasoning; AA Index 66 at launch (≈53 current vintage). Capped by the lack of a Mythos-specific published reasoning number and the AA vintage rescaling.
- **Context window: 95/100.** 1M-token window verified by Claude Platform docs + Bedrock card (≥1M tier = 95–100). Held at 95, not 100, because no ≥98% retrieval-at-512K+ measurement (MRCR/RULER) is published for this ID.
- **Multimodal: 68/100.** Text + image input → text output only (no audio/video/PDF-native, no non-text output) → +image band 60–70. Same modality coverage as Fable.
- **Coding: 93/100.** Same-weights Fable coding capability plus the safeguard-free TB4 60.9% agentic-terminal/coding lift; no Mythos-specific SWE-bench Verified figure exists, so the score leans on the shared-weights proxy + TB4. Capped by the missing independent coding measurement.
- **Cost efficiency: 32/100.** $10 / $50 per 1M (≈30 anchor for this price point), nudged to 32 for the $0.25 cache-read and 50%-off Batch API. Gated access and the retention opt-in add friction; identical economics to Fable 5.1.
- **Overall Score: 88.4/100.** Half-up mean of the five quality dims (93 + 93 + 95 + 68 + 93) / 5 = 442 / 5 = **88.4**. Best fit: vetted cyber-defense and life-sciences research teams who need Fable-5.1-class capability without the dual-use safeguard refusals — and who can clear Anthropic's US verification gate.

### Conflicting-results notes

1. **Three Terminal-Bench numbers, two harnesses + two safeguard grades.** Vendor TB4: Mythos **60.9%** vs Fable **55.8%** (gap = safeguards, same weights). Independent AA TB4 board: Fable (High) **52.0%** on mini-SWE-agent v2.4.6 / 66-task release (gap = harness, Claude Code vs mini-SWE-agent). No Mythos row exists on the AA board. Scored Tool/Coding at the vendor Mythos figure with the harness caveat, not the lower AA Fable number.
2. **TB-Science 52.6% is Fable's, not Mythos's.** Anthropic publishes no Mythos-specific Terminal-Bench-Science result; attributing Fable's 52.6% to Mythos would be a fabrication.
3. **No independent third-party benchmark for Mythos 5.1.** Gated access means respan.ai and the AA board have no Mythos run; every capability figure beyond TB4 is a same-weights Fable proxy, explicitly marked provisional. AISI's evaluation was of the older Mythos *Preview* (Apr 2026), not 5.1.
4. **AA Index vintage drift** (66 launch → ~53 current) applies to the shared weights and is not a Mythos-specific measurement.
5. **Pricing identical to Fable** ($10/$50, cache read $0.25); ngai.solutions frames the cache read as "75% off" — the concrete $0.25/MTok figure is what is corroborated (AI/TLDR + Bedrock), so the percentage framing is not relied upon.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: Public internet research — six successful independent web searches plus primary-source verification (Anthropic Fable 5.1 & Mythos 5.1 System Card, Claude Platform docs model overview, AWS Bedrock model card, frontierlog.ai checked benchmark, AI/TLDR, ngai.solutions / eigent.ai / presenc.ai / aivancity.ai access-and-safeguard analyses). Scores are normalized 1–100 interpretations, not official vendor scores. Mythos shares Fable 5.1's weights, so non-TB4 capability is treated as a provisional same-weights proxy; the single Mythos-specific published benchmark (TB4 60.9%) anchors Tool use and Coding.
- Reference URLs:
  - [Claude Fable 5.1 & Claude Mythos 5.1 System Card (Anthropic, primary PDF)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Mythos 5.1 — Claude Platform Docs (specs: 1M ctx, 128K out, adaptive thinking)](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Claude Mythos 5.1 — Amazon Bedrock model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5-1.html)
  - [Claude Mythos 5.1 — Benchmark Scores and History (frontierlog.ai; TB4 60.9% checked 2026-10-19)](https://frontierlog.ai/model/claude-mythos-5-1)
  - [Claude Mythos 5.1: Access, Specs & Benchmarks (AI/TLDR; $10/$50, 1M ctx)](https://ai-tldr.dev/models/claude-mythos-5-1/)
  - [Claude Fable 5.1 and Mythos 5.1: Same Weights, Two Access Regimes (ngai.solutions)](https://ngai.solutions/blog/claude-fable-5-1-mythos-5-1)
  - [Claude Fable 5.1 and Mythos 5.1 Put to the Safeguards Test (aivancity.ai)](https://aivancity.ai/blog/en/claude-fable-5-1-and-mythos-5-1-put-to-the-safeguards-test/)
  - [Terminal-Bench v4.0 (AA) board — Fable 5.1 High 52.0%, mini-SWE-agent harness (Benchmark Heaven)](https://benchmarkheaven.com/benchmarks/result?axis=aa-terminal-bench%3A%3A4.0%40%40Published%2520board%40%40fraction&model=claude-fable-5.1%3A%3Ahigh)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.