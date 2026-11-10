# Claude Mythos 5.2 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-mythos-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's restricted-access distribution of Claude Fable 5.2 — the same model weights, available only to organizations verified through Anthropic's verification programs (e.g. Cyber Verification Program). Not a variant/alias of a different capability tier; it is a gating/access-mode sibling of Claude Fable 5.2 (`claude-fable-5-2`).
- **Provider / access:** Claude API (`claude-mythos-5-2`), Amazon Bedrock, Google Cloud, Microsoft Foundry. Chat Completions-style Messages API (Anthropic format). Verification required — general self-serve access is not offered.
- **Release / knowledge:** released 2026-11-09; knowledge cutoff June 2026 (per Anthropic model docs).
- **IDs:** `anthropic/claude-mythos-5-2` (gateway) / `claude-mythos-5-2` (native).
- **Context window:** 1,000,000 tokens; max output 128K. Verified on the Anthropic model docs page and the BenchLM model page (Context Window 1M).
- **Modalities:** text + images in; text out; reasoning yes; tool calls yes; JSON mode via tool use. No audio/video input (Anthropic: "text and images → text").
- **Pricing (as of 2026-11-10):** $8 in / $40 out per 1M; cache read $0.20 (0.05× input); Batch API 50% off ($4/$20). Paid — no free tier. Same specs and pricing as Claude Fable 5.2 (Anthropic docs).
- **Architecture:** proprietary (parameters undisclosed; weights not publicly available).

### Raw benchmarks found

> Rows published for `claude-mythos-5-2` specifically (BenchLM snapshot 2026-11-10, 16 source-displayable rows, unranked — coverage 16/804). Rows measured on the same-base sibling `claude-fable-5-2` are labeled as such and are used only as same-base proxies.

Agent / tool use:

- Terminal-Bench 4.0: **70.50%** (Anthropic system card 2026-11-09, Mythos-specific row — higher than Fable 5.2's own 67.60%).
- Terminal-Bench-Science 0.1: **75.3%** (system card, Mythos-specific).
- CVE Rediscovery: **89.6%** / ExploitGym: **38.1%** / Binary Exploitation Benchmark: **148** (system card, Mythos-specific — security/agentic rows).
- Same-base proxies measured on `claude-fable-5-2` (BenchLM 2026-11-10): AutomationBench **51.4%**, AA AutomationBench **76.4%** (AA run), AA Terminal-Bench 4.0 **59.6%** (AA run), OSWorld 2.1 Offline **89.3%**, GDPval-AA **1831** Elo, AA Briefcase **1785** Elo, WANDR **82.1%**, Remote Labor Index **41.3%**, DRACO **87.7%**.
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas: no verified public score found for either sibling.

Reasoning / knowledge:

- HLE: **74.2%** with tools / **73.2%** without tools (system card, Fable 5.2 row; AA independent HLE **74.3%**). AA Intelligence Index **64.6** (Fable row, AA leaderboard).
- ARC-AGI-3: **65.7%** raw / **94.90%** with provider adapter (system card, Fable row).
- STEM Professor Bench **61.8%**, AA-LCR **83.3%**, CritPt **35.4%**, AA-Omniscience Index **66.8** (accuracy **79.1%**, hallucination **59.3%**) — Fable-measured rows.
- Mythos-specific knowledge rows are biomedical/protein-science suites: Protein Domain ID **91.8%**, De novo protein-binder design **85.1%**, Protocols troubleshooting **77.1%**, SingleCellBench **65.6%**, Protein Design **64.6%**, Medicinal chemistry **69.0%**, Protein Mutation Attribution **51.5%**, Morphology-to-molecule matching **35.2%**.
- GPQA Diamond: no verified public score found.

Coding:

- SWE-bench Pro: **93%**, SWE-bench Multilingual **96.6%**, SWE-bench Multimodal **74.1%**, DeepSWE **74.3%**, ProgramBench **85.6%** (system card — Fable 5.2 rows; no Mythos-specific SWE row published).
- FrontierSWE v2: **69.9%** (Proximal leaderboard), FrontierCode 2.0: **49.1%** (Cognition), AA-SciCode **67.7%** (AA), CursorBench 4.0 **60.0%** (Cursor evals) — Fable-measured.
- Mythos-specific coding-adjacent rows: Terminal-Bench 4.0 70.50%, Terminal-Bench-Science 75.3% (see Agent section).
- LiveCodeBench / SWE-bench Verified: no verified public score found.

Long context:

- 1M window declared (Anthropic docs, BenchLM); no MRCR / RULER / GraphWalks long-context retrieval score found for either sibling.

Multimodal:

- Biomedical image analysis: **80.7%** (system card — Mythos-specific row, image understanding).
- Same-base Fable rows: Chartography (tools) **91.6%** / (no tools) **73.4%**, OfficeQA **83.4%**, OfficeQA Pro **72.9%**, BenchCAD 2.1 **75.4%** / (tools) **83.5%**.
- LVBench / audio / video input: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 4.0 70.50% and TB-Science 75.3% (Mythos rows, both above the 70% frontier band), plus same-base OSWorld 2.1 89.3%, GDPval-AA 1831, AA Briefcase 1785 Elo and AA AutomationBench 76.4%; capped at 91 because Tau3-Banking and Claw-Eval remain unpublished (the standing cap) and no Mythos-specific GDPval/Briefcase row exists.
- **Reasoning: 91/100.** HLE 73.2–74.3%, AA Intelligence Index 64.6 (60+ frontier ref) and ARC-AGI-3 65.7% are all ≥ the frontier references, and the system card's CVE Rediscovery 89.6% shows deep agentic reasoning; capped because GPQA Diamond is unpublished and the Mythos-specific reasoning rows are domain (bio/protein) suites rather than general reasoning benchmarks.
- **Context window: 95/100.** 1M window confirmed on Anthropic docs and BenchLM (95–100 tier); no measured long-context retrieval score (MRCR/RULER/GraphWalks) exists for this release, so the retrieval-verified top-out keeps it out of the upper band.
- **Multimodal: 70/100.** Image understanding is proven by the Mythos-specific biomedical image analysis 80.7% plus same-base Chartography 91.6%/OfficeQA 83.4%; held at 70 because output is text-only, there is no audio/video input, and no general-purpose vision benchmark (e.g. MMMU-class) row is published for this model.
- **Coding: 92/100.** SWE-bench Pro 93%, SWE-bench Multilingual 96.6%, DeepSWE 74.3% (74%+ frontier ref) and FrontierSWE v2 69.9% on the same-base sibling, reinforced by Mythos-specific TB4.0 70.50%; capped at 92 because SWE-bench Verified and LiveCodeBench stay unpublished and no Mythos-specific SWE row exists.
- **Cost efficiency: 40/100.** $8/$40 per 1M places it in the premium band (well below the $3/$15 ≈ 60 anchor); $0.20 cache reads and the 50% batch discount help agentic workloads but list price is twice Opus 5.5's.
- **Overall Score: 87.8/100.** (91+91+95+70+92)/5 = 439/5 = 87.8 — best-fit paid flagship for verified organizations needing Fable 5.2-class agentic coding, security research and biomedical reasoning with 1M context; access is gated by Anthropic's verification programs.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: public internet research (BenchLM model pages for `claude-mythos-5-2` and `claude-fable-5-2`, snapshot 2026-11-10; Anthropic platform model docs; Anthropic system card 2026-11-09 rows as indexed by BenchLM; Artificial Analysis, Proximal, Cognition and Cursor leaderboard rows for the same-base sibling); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.2 (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/claude-mythos-5-2)
  - [Claude Fable 5.2 (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/claude-fable-5-2)
  - [Claude Mythos 5.2 model docs (Anthropic)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Models overview (Anthropic)](https://platform.claude.com/docs/en/models/overview)
  - [Claude Fable 5.2 and Claude Mythos 5.2 system card (Anthropic, 2026-11-09)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
