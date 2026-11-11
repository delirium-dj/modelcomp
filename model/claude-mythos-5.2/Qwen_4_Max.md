# Claude Mythos 5.2 — findings by Qwen 4 Max

- Source: Anthropic/claude-mythos-5.2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2 (restricted variant; API access via verification programs)
- **Short description:** Anthropic's most capable model class for **cybersecurity and biology research** (Nov 9, 2026) — the **same underlying model as Claude Fable 5.2** with the cyber/biology safeguards removed, available only to vetted organizations. Where Fable's classifiers block a task, Mythos performs it: TB4.0 **70.5** (Fable 67.6), TB-Science 0.1 **75.3** (Fable 74.6), CyScenarioBench **76.3**, CVE Rediscovery **89.6**, de novo protein-binder design **85.1**. General capability equals Fable 5.2 (HLE 74.2, SWE-Pro 93, FrontierMath v2 T4 100, AA index 64.6 — see the Fable 5.2 findings). BenchLM shows **16 source-displayable rows, unranked** (restricted variant, no public overall). Best-aligned Mythos yet (behavioral audit **2.67/10**).
- **Provider / access:** **Verification-gated, not generally available.** Cyber Verification Program (security teams; also unlocks advanced cyber on Opus 5.5 / Sonnet 5.5 / Mythos 5.1) and Life Sciences Verification Program (researchers). **Claude Security** (Enterprise) now runs on Mythos 5.2. Fast mode ($16/$80) available only through trusted-access programs. No open weights; no self-serve API.
- **Release / knowledge:** Released 2026-11-09. Lineage: Mythos Preview → Mythos 5 (Jun 9; export-controlled Jun 12, restored Jul 1) → Mythos 5.1 (Sep 1) → Mythos 5.2 (Nov 9). Project Glasswing expanded Jun 2 (~150 orgs, 15+ countries); Cyber Verification expanded Oct 6. Knowledge cutoff June 2026 (shared Fable 5.2 base, per lineup docs). Effort Low/Med/High/Xhigh/Max.
- **IDs:** `claude-mythos-5-2` (restricted); sibling `claude-fable-5-2` (same weights, safeguards on, general availability). Distinct from Mythos 5 / 5.1 / Preview.
- **Context window:** **1M tokens**, 128K max output (shared Fable 5.2 base). Cache reads $0.20/M (2.5%). AA-LCR 83.3 / MLCR-AA 43.9 (Fable-base figures). **30-day data retention required by default** for safety monitoring; Enterprise Frontier Safeguards (EFS) enables ZDR-compatible monitoring; eligible Cyber Verification customers with existing ZDR may keep it.
- **Modalities:** Text + image input, text output. Biomedical image analysis **80.7**; shares Fable 5.2's vision (Chartography 73.4/91.6, BenchCAD 83.5, RoboDojo 64.9, OSWorld 89.3).
- **Pricing (as of 2026-11-11):** **$8 in / $40 out** per 1M (same as Fable 5.2); fast mode **$16/$80** (verification-only). Access gated to vetted orgs; mandatory 30-day retention unless EFS/eligible-ZDR.
- **Architecture:** Proprietary; identical base to Fable 5.2. System card: `assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf`. Safeguards removed for dual-use cyber/bio; external evaluators UK AISI, Frontier Design, METR.

### Raw benchmarks found

Mythos-specific (system card / official Mythos page, safeguards OFF; the gap vs Fable reflects tasks where Fable's safeguards intervene):

- Cyber: CyScenarioBench **76.3** (Mythos 5.1: 61.7; Opus 5.5 no-safeguards 67.6; GPT-6 Cyber 61 — per-lab unique tasks); CVE Rediscovery **89.6** (Mythos 5.1 78.3; Opus 5.5 81.3 — Oct 2026 run vs 1,829 CVEs, +10.2% over Opus 5.5, +14.4% over Mythos 5.1); ExploitGym **38.1**; Binary Exploitation Benchmark **148 hijacks**
- Agentic: Terminal-Bench 4.0 **70.5** (Fable 67.6); TB-Science 0.1 **75.3** (Fable 74.6)
- Biology/protein: de novo binder design 24h **85.1** (Mythos 5.1 79.1; Opus 5.5 no-safeguards 82.6); Protein Domain ID **91.8**; Protocols troubleshooting **77.1**; Medicinal chemistry **69.0**; SingleCellBench **65.6**; Protein Design **64.6**; Protein Mutation Attribution **51.5**; Morphology-to-molecule matching **35.2**; Biomedical image analysis **80.7**; AAV capsid folding **28/34** accurate (launch post)
- Alignment: automated behavioral audit **2.67/10** (Mythos 5.1 3.28; Opus 5.5 2.79; Sonnet 5.5 3.10 — lower better); lower propensity for biased/motivated reasoning; misalignment risk assessed low
- Tester cyber milestones: Mozilla — roughly **doubled** vulnerability-discovery metrics vs Mythos 5.1 on Firefox; Rubrik Code Guardian harness; one security firm found **1 in 6** confirmed bugs missed by all other frontier models; no overstated severity findings (vs ~1 in 20 for prior models)

Shared Fable 5.2 base (safeguards-on figures; identical weights — full detail in `../claude-fable-5.2/Qwen_4_Max.md`): HLE **74.2** tools / 73.2 no-tools (AA-HLE 74.3), SWE-bench Pro **93**, SWE Multilingual 96.6, FrontierCode 2.0 **49.1 Xhigh**, FrontierSWE v2 69.9, DeepSWE 74.3, ProgramBench 85.6, ARC-AGI-3 **65.7**, FrontierMath v2 T1–3 **95.088** / T4 **100** (Epoch), CritPt 35.4, AA Intelligence Index **64.6** (v5.0.1-era), AA-Omniscience net 66.8, GDPval-AA 1831, AA-Briefcase 1785, OSWorld 2.1 offline 89.3, RoboDojo 64.9, WANDR 82.1, RLI 41.3, Chartography 73.4/91.6, BenchCAD 83.5. BenchLM Fable 5.2 aggregate 91.41 #1/1020 (Mythos itself unranked).

### Normalized scores (1–100)

- **Tool use: 97/100.** Inherits Fable 5.2's elite agent stack (OSWorld 89.3, WANDR 82.1, RLI 41.3, GDPval 1831) and adds safeguards-off cyber/bio tool work: TB4.0 **70.5**, TB-Science 75.3, CVE Rediscovery 89.6, ExploitGym 38.1, Binary Exploitation 148. Capped only by Briefcase Elo 1785 < Opus 1800 and Harvey v1.1 7.2.
- **Reasoning: 97/100.** Same frontier reasoning as Fable 5.2 (HLE 74.2/73.2, AA-HLE 74.3, FrontierMath v2 T4 100, ARC-3 65.7, CritPt 35.4, AA index 64.6) plus deep bio reasoning (Protein Domain ID 91.8, medicinal chemistry 69.0). Capped by 59.3% hallucination and GDP.pdf 24.2.
- **Context window: 97/100.** 1M tokens, 128K output, 2.5% cache reads, AA-LCR 83.3 (shared base). Deductions: Fable/Mythos excluded from the 300K batch beta, mandatory 30-day retention, LCR/MLCR not class-leading.
- **Multimodal: 80/100.** Image-in with Fable 5.2's exceptional grounded vision (Chartography 73.4/91.6, BenchCAD 83.5, RoboDojo 64.9) plus biomedical image analysis 80.7; capped by the image-only ceiling and no published MMMU-Pro/video scores.
- **Coding: 97/100.** Fable 5.2's suite (SWE-Pro 93, FrontierCode 49.1, CursorBench 60.0, DeepSWE 74.3) with a higher safeguards-off TB4.0 **70.5** and cyber coding (ExploitGym 38.1, Binary Exploitation 148). Capped by DeepSWE/TB4.0-AA merely tying the frontier class.
- **Cost efficiency: 46/100.** Same $8/$40 (fast $16/$80) as Fable 5.2 with 2.5% cache reads, but **verification-gated** (no self-serve access), mandatory 30-day retention unless EFS/eligible-ZDR, and no batch discount — access overhead and compliance cost pull it just below Fable's 48. Anchored in the $8/$40 premium band.
- **Overall Score: 93.6/100.** Mean of the five quality dims (97+97+97+80+97)/5 = 93.6. The most capable cyber/bio research model measured here — Fable 5.2's frontier reasoning/coding with dual-use safeguards removed, strictly ≥ Fable on every task and clearly ahead on cyber/bio. Best-fit: vetted security teams (vulnerability discovery, exploit reproduction, Claude Security) and life-sciences researchers (protein design, capsid folding, medicinal chemistry); not for general use — apply via the Cyber / Life Sciences Verification Programs, or use Fable 5.2 for safeguarded general work.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic's dedicated Mythos page and the full Fable 5.2/Mythos 5.2 launch announcement read in cache, the shared system card via BenchLM's sourced Mythos profile, and WebSearch corroboration from felloai/datacamp/eigent/cometapi); scores are normalized 1–100 interpretations, not official vendor scores. Mythos 5.2 and Fable 5.2 are the **same underlying model**; general-capability figures are Fable-labelled (safeguards on) and identical for Mythos except where safeguards intervene — Mythos-specific rows (TB4.0 70.5, TB-Science 75.3, CyScenarioBench 76.3, CVE Rediscovery 89.6, ExploitGym 38.1, protein/bio suite) are safeguards-off. Conflicts labelled, never averaged: CyScenarioBench uses per-lab unique tasks (not directly cross-comparable); CVE Rediscovery is an internal Oct 2026 run vs 1,829 CVEs; RoboDojo/OSWorld are internal/offline-partial; AA index 64.6 is v5.0.1-era (not comparable to other versions); Harvey v1.1 is hallucination-gated all-pass. BenchLM assigns Mythos **no overall score** (restricted, 16/812 rows) — the 91.41 #1 aggregate belongs to Fable 5.2, not Mythos. llm-stats returned a shell; pricing/access confirmed from the official Mythos page ($8/$40, fast $16/$80, verification-gated, 30-day retention). Identity: Mythos 5.2 ≠ Mythos 5.1 ≠ Mythos 5 ≠ Mythos Preview; Mythos 5.2 = Fable 5.2 weights with safeguards removed; TB4.0 ≠ TB2.1; FrontierCode 2.0 ≠ v1.1; FrontierMath v2 ≠ legacy.
- Reference URLs:
  - [Claude Mythos 5.2 — Anthropic (official)](https://www.anthropic.com/claude/mythos)
  - [Introducing Claude Fable 5.2 and Claude Mythos 5.2 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 and Mythos 5.2 System Card (PDF) — Anthropic](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Claude Mythos 5.2 benchmark profile — BenchLM](https://benchlm.ai/models/claude-mythos-5-2)
  - [Claude Fable 5.2 benchmark profile — BenchLM](https://benchlm.ai/models/claude-fable-5-2)
  - [Claude Fable 5.2 and Mythos 5.2: Benchmarks and Pricing — FelloAI](https://felloai.com/claude-fable-5-2/)
  - [Claude Mythos 5.2 Released: Capabilities, Access — CometAPI](https://www.cometapi.com/claude-mythos-5-2-access/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.