# Claude Mythos 5.1 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the 2026-10-20 read was directionally right and is now **independently corroborated with one structural caveat**. platform.claude.com (authoritative) confirms Mythos 5.1 is **the same model as Fable 5.1**, gated to verified organizations with looser cyber/bio safeguards — so its capability standing is *inherited*, not independently measured. **Artificial Analysis returns 404 for the Mythos id** (it tracks the shared weights under `claude-fable-5-1`), and BenchLM covers Mythos on only **1 of 724** benchmarks (its own system-card Terminal-Bench 4.0 cell) and leaves it **unranked**. Inheriting Fable 5.1's independent cells closes the draft's gaps: **GPQA Diamond is no longer blank** (93.7% AA / 93.4% Vals), and the **AA Intelligence Index is 49 (#17 of 58, v5.0)** — solidly top-quartile, not the undisputed leader the vendor framing implied. The draft's Mythos-branded **Terminal-Bench 4.0 60.9%** (vs Fable's 55.8%) is *real but not a capability gain*: sources attribute the delta entirely to safeguard-permissiveness on refusal-heavy cyber tasks, so the shared **AA-independent 52.0%** still governs. Two quality dims lift on corroboration (Tool 91→92, Multimodal 87→88); **Cost efficiency drops 55→45** — same $10/$50 as Fable, and AA's shared per-task measurement is **$12.99/task, #57 of 57 (most expensive in class)**, on top of verification-gated access. **Overall 92 → 93.**

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's verification-gated top tier — per Claude Platform docs it is **the same model as Claude Fable 5.1**, available only to organizations verified through Anthropic's programs (e.g. the Cyber Verification Program), shipping with more permissive cybersecurity/biology safeguards. Distinct tracked entry from `claude-fable-5.1` (access + safeguard posture differ, weights do not).
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud Vertex AI, Microsoft Foundry. Verification required (application via the relevant program).
- **Release / knowledge:** Released 2026-09-01; reliable knowledge cutoff Jun 2026 (training cutoff Jun 2026). Retirement not sooner than 2027-09-01.
- **IDs:** `anthropic/claude-mythos-5-1` (no free Zen ID; premium verified-access tier).
- **Context window:** 1,000,000 tokens input (~555k words on the current tokenizer); 128,000 tokens max output (synchronous Messages API; up to 300k on Batches with the output-300k beta header for other Claude models).
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking, always on; default effort `high`); tool calls yes; comparative latency "Slower".
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50, 1h cache write $20, cache read $0.25; Batch API 50% off. Same as Fable 5.1.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

> Mythos 5.1 shares weights with Fable 5.1 (platform.claude.com: "offers the same capabilities only to organizations verified through Anthropic's verification programs"), so the Fable 5.1 rows from Anthropic's launch table and system card are the applicable measurements. **No Mythos-5.1-specific independent benchmark exists**: Artificial Analysis 404s the `claude-mythos-5-1` slug (it measures the shared weights under `claude-fable-5-1`), and BenchLM's Mythos page carries 1 of 724 rows and is unranked. Independent figures below are therefore **inherited from Fable 5.1 by documented weight-identity**, labelled as such — not a sibling transfer between different models. (2026-11-02 pass.)

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** Mythos-branded vendor cell (Anthropic Fable 5.1 & Mythos 5.1 system card; BenchLM's only Mythos row, 1 of 724) vs **55.8%** for the Fable-branded vendor cell and **52.0%** independent AA (shared weights). The Mythos-vs-Fable vendor delta is attributed by sources **entirely to safeguard-permissiveness on refusal-heavy cyber tasks, not a capability difference**; the independent AA figure governs. (Behind Opus 5.5 66.4%.)
- OSWorld 2.1 (computer use): **80.7%** partial (as Fable 5.1; behind Opus 5.5 81.8%)
- AutomationBench (Zapier): **31.4%** (as Fable 5.1; behind Opus 5.5 40.0%)
- GDPval-AA v2.1: **1735 Elo** (as Fable 5.1; behind Opus 5.5 1846, ahead of Opus 5 1708)

Reasoning / knowledge:

- Humanity's Last Exam: **65.6%** with tools (as Fable 5.1; between Opus 5.5 67.7% and Opus 5 63.6%)
- Terminal-Bench-Science 0.1: **52.6%** (as Fable 5.1; behind Opus 5.5 58.7%, GPT-6 Astra 64.6%)
- GPQA Diamond: **93.7% (Artificial Analysis) / 93.4% (Vals AI)** — draft had "no verified public score found"; gap **closed** via the shared Fable 5.1 weights (both independent, double-replicated).

Coding:

- FrontierCode v1.1 (Main): **50.3%** (as Fable 5.1; behind Opus 5.5 54.4%)
- CursorBench 4.0: **51.8%** (as Fable 5.1; behind Opus 5.5 57.8%)
- SWE-bench Verified: no verified public score found for the 5.1 tier (the earlier Claude Mythos line was reported at 93.9% SWE-bench Verified vs Opus 4.6's 80% — lineage, not a 5.1 measurement)

Multimodal:

- Chartography (visual chart recognition): **88.4%** with tools (as Fable 5.1)

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 92/100.** *(91 → 92 — parity with the Fable 5.1 enrichment, since these are the same weights.)* OSWorld 2.1 80.7% and GDPval-AA 1735 are frontier-class; the Mythos-branded Terminal-Bench 4.0 60.9% is a safeguard-permissiveness artifact, so the **shared AA-independent 52.0%** and **AA Agentic 58.0%** govern. Held below Opus 5.5 (AutomationBench 31.4% trails 40.0%).
- **Reasoning: 94/100.** *(unchanged, but now corroborated rather than vendor-only.)* HLE 65.6% with tools sits at the top of the Claude line; the draft's "no GPQA" gap is closed at **93.7% AA / 93.4% Vals**, and the shared **AA Intelligence Index 49 (#17 of 58, v5.0)** places it top-quartile — strong, but not the field leader. Held below 100 by Terminal-Bench-Science trailing Astra and by AA's **Omniscience hallucination 70.0% (the worst honesty profile in this batch)**, which caps reasoning trust.
- **Context window: 98/100.** 1M-token input with 128K output on the newer tokenizer; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 88/100.** *(87 → 88 — parity with Fable 5.1.)* Chartography 88.4% with tools and text+image input; capped by no independently administered MMMU-Pro image-in row of its own under the Mythos id.
- **Coding: 92/100.** *(unchanged.)* FrontierCode 50.3% and CursorBench 4.0 51.8% are strong (within a few points of Opus 5.5). **Lineage guard:** the "93.9% SWE-bench Verified" figure is the *earlier Claude Mythos 5 line*, not a 5.1-tier measurement — recorded as lineage, not used to lift the score. CursorBench 3.2.0 vendor rows (Fable 73.4%) are a **different harness generation** and are not mixed with the 4.0 figure.
- **Cost efficiency: 45/100.** *(55 → 45 — the sharpest revision, driven by per-task measurement, not list price.)* $10/$50 is the most expensive Claude tier (2.5× Opus 5.5's $4/$20) and access is verification-gated. The draft's 55 treated only the sticker price; AA's shared (Fable 5.1) measurement is **$12.99 per Intelligence-Index task, #57 of 57 — the most expensive in the comparison class**, because the model emits ~160 M tokens on the Index run (well above the 70 M median). The 2.5% cache-read rate and 50% batch discount soften it but do not reverse it. **Not counted in the Overall mean.**
- **Overall Score: 93/100.** *(92 → 93.)* Mean of Tool 92 + Reasoning 94 + Context 98 + Multimodal 88 + Coding 92 = 464 / 5 = 92.8 → 93. The lift is provenance, not new capability: independent AA/Vals corroboration of the shared Fable 5.1 weights removes the vendor-only discount on Tool and Multimodal. The model is the same silicon as Fable 5.1; what Mythos adds is **access posture** (verified orgs, looser cyber/bio safeguards), which does not raise the capability mean. Best fit: **verified organizations needing the top Claude tier for cybersecurity/biology research under permissive safeguards** — everyone else gets identical weights via Fable 5.1, and Opus 5.5 now leads most rows at less than half the cost. Note the **cost caveat** (#57/57 per task) does not enter the mean but dominates real-world value.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-02
- Method: public internet research (Claude Platform docs "Claude Mythos 5.1" model overview for specs/pricing/identity; Anthropic's Opus 5.5 launch table for the shared Fable 5.1 benchmark rows); the 2026-11-02 pass adds **Artificial Analysis** (`claude-mythos-5-1` returns **404** — AA measures the shared weights under `claude-fable-5-1`, so its cells are cited by documented weight-identity, not as an independent Mythos run), the **BenchLM.ai** Mythos page (1 of 724 rows, unranked; its only cell is the combined Fable/Mythos system-card Terminal-Bench 4.0 60.9%), and identity confirmation from **platform.claude.com** plus TowardsAI/Ampere secondary write-ups. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Conflict handling (explicit, not averaged):** (1) *Mythos 60.9% vs Fable 55.8% vs AA 52.0% on Terminal-Bench 4.0* — the vendor Mythos cell is **real but safeguard-driven** (identical weights; delta traced to refusal-heavy cyber tasks), so the **independent AA 52.0% governs** the Tool dim and the vendor figures are recorded as context. (2) *GPQA* — draft "none found" vs AA 93.7 / Vals 93.4 (inherited) → **gap closed on corroborated shared weights**. (3) *SWE-bench 93.9%* — the **earlier Mythos 5 line**, not 5.1 → kept as **lineage**, not scored. (4) *Cost* — draft 55 (list price) vs AA $12.99/task #57/57 (per-task) → per-task governs, 45. (5) *CursorBench* — 4.0 51.8% kept; 3.2.0 vendor 73.4% is a **different harness generation**, not mixed.
- **Guards applied:** (a) **weight-identity inheritance, not sibling transfer** — Mythos 5.1 and Fable 5.1 are the *same model* per platform.claude.com, so AA's Fable cells legitimately apply; this is distinct from the forbidden case of moving rows between genuinely different models; (b) **AA-404 documented** — no Mythos-specific AA run exists; (c) **lineage quarantine** — Mythos 5 / Mythos Preview figures never used as Mythos 5.1 evidence; (d) **harness discipline** — Terminal-Bench 4.0 vs CursorBench 3.2.0/4.0 kept separate; (e) **Cost efficiency and Speed are excluded from the Overall mean** (mean of the five quality dims only); (f) never read peer raters' findings files in either pass (zero-influence). Would still close remaining gaps: a genuinely Mythos-only independent row (none exists — it is the same model as Fable 5.1), and any published MRCR/RULER long-context figure.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
