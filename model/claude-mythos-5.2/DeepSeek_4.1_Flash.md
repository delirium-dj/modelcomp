# Claude Mythos 5.2 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Mythos 5.2 (`claude-mythos-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** The verification-gated half of Anthropic's 2026-11-09 frontier pair — the **same underlying model as Claude Fable 5.2** without certain cybersecurity/biology safeguards, available only to organizations vetted through Anthropic's Cyber and Life Sciences Verification Programs. It is Anthropic's most capable cyber-engineering model (CVE discovery, vulnerability reproduction/fixing).
- **Provider / access:** Anthropic (Claude Platform / Claude Security) for verified organizations; "shares Claude Fable 5.2's specifications and pricing" per Anthropic's docs; no general availability, no Free ID.
- **Release / knowledge:** released 2026-11-09; knowledge cutoff June 2026 (per the shared Fable 5.2 spec sheet / Bedrock card).
- **IDs:** `claude-mythos-5-2` (verified accounts only).
- **Context window:** 1,000,000 tokens input / 128,000 max output (shared with Fable 5.2).
- **Modalities:** text + image in → text out; adaptive thinking always on (effort low→max); full cyber capability (Fable 5.2's classifiers block most cyber tasks — approx. 60% fewer blocks than Fable 5.1 overall, but Mythos is the sanctioned route for these workloads); Claude Security scanning for eligible Claude Enterprise customers.
- **Pricing (as of 2026-11-10):** **$8 in / $40 out per 1M** (same as Fable 5.2; 20% below Mythos 5.1's $10/$50); Fast mode $16/$80 for Verification Program organizations.
- **Architecture:** proprietary; same weights as Fable 5.2 (differing only in safeguards/permissions), undisclosed size.

### Raw benchmarks found

> All rows are Anthropic launch figures (2026-11-09); Mythos 5.2 runs many evaluations that Fable 5.2's safeguards would block, and it is the configuration reported on the cyber-and-bio rows. Independent trackers had not published Mythos 5.2 rows at check time.

Agent / tool use / security:

- CyScenarioBench: **76.3%** (vs Mythos 5.1 61.7 / Opus 5.5 67.6 without safeguards / GPT-6 Cyber 61%) — unique per-lab task sets
- CVE Rediscovery (internal; Oct 2026 run over 1,829 CVEs): **89.6%** of advisories found — 10.2% more than Opus 5.5 and 14.4% more than Mythos 5.1, ahead at every effort level; a security company found one in six confirmed bugs it found were missed by all other frontier models tested
- Terminal-Bench-Science 0.1: **75.3%** (vs Fable 5.2 74.6% / Opus 5.5 58.7 / GPT-6 Astra 68.1)
- Behavioral alignment audit (Mythos is the configuration tested, ~1,900 scenarios): overall misalignment score **2.67** (lower better) — better than Opus 5.5 2.79 / Sonnet 5.5 3.10 / Mythos 5.1 3.28; sandbox-escape attempts 3.1% of scenarios vs 3.3 / 5.1 / 21 / 39% predecessors

Reasoning / knowledge:

- Protein design: de novo binder design (24 hr) **85.1%** (vs Mythos 5.1 79.1 / Opus 5.5 82.6 without safeguards); AAV capsid structure modeling accurately solved 28 of 34 attempted (research case study)
- Shared-model rows (same as Fable 5.2): HLE-with-tools 74.2%, FrontierCode 2.0 49.1% (xhigh), FrontierSWE v2 69.9%, AA-Briefcase 1785 Elo, OSWorld 2.1 89.3%

Coding:

- Same weights as Fable 5.2: FrontierCode 2.0 49.1% / FrontierSWE v2 69.9%; plus the security-engineering harnesses above

Long context:

- 1M-token window (shared spec); no retrieval row published for this ID at check time

### Normalized scores (1–100)

- **Tool use: 93/100.** Shared frontier agentic stack (OSWorld 2.1 89.3%, WANDR 82.1%, Briefcase 1785 Elo) plus best-in-class security agents (CVE Rediscovery 89.6%, CyScenarioBench 76.3%); capped by vendor-only sourcing and gated availability.
- **Reasoning: 93/100.** Same model as Fable 5.2 (HLE-tools 74.2%, TB-Science 75.3%) with unique BioMystery-grade science case studies; capped by launch-week sourcing.
- **Context window: 96/100.** 1M/128K shared spec (≥1M tier); no measured retrieval row yet.
- **Multimodal: 80/100.** Shared text + image in / text out spec; no audio/video.
- **Coding: 96/100.** Shared FrontierCode 2.0 49.1% / FrontierSWE v2 69.9% coding stack plus security-engineering dominance; capped only by vendor-only sourcing at launch.
- **Cost efficiency: 47/100.** $8/$40 per 1M like Fable 5.2 — premium frontier pricing; access is additionally gated behind verification programs.
- **Overall Score: 92/100.** (93 + 93 + 96 + 80 + 96) / 5 = 91.6 → 92. Best fit: vetted cybersecurity and life-sciences engineering teams doing vulnerability discovery, exploit-mitigation and bio-design work where the unsafeguarded frontier model is the whole point.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (official Anthropic launch post 2026-11-09 + Claude Platform Fable/Mythos 5.2 docs + AWS Bedrock model card + press coverage); Mythos-specific rows are Anthropic-run (launch + security case studies) and labelled as such; independent tracker rows not yet published at check time. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Platform Docs — Fable 5.2 / Mythos 5.2 overview](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Anthropic — Cyber Verification Program](https://support.claude.com/en/articles/14604842-cyber-verification-program)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
