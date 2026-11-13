# GPT-5.3-Codex — findings by Qwen 4 Max

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's agentic-coding specialist ("the most capable agentic coding model to date" at launch), optimized for Codex and similar environments; claimed industry highs on SWE-Bench Pro and Terminal-Bench at release. Distinct from GPT-5.2-Codex, GPT-5.1-Codex(-Max/Mini), GPT-5.3-Codex-Spark (sibling, real-time tier) and the general GPT-5.x line.
- **Provider / access:** OpenAI API `gpt-5.3-codex` — **Responses API only** (no Chat Completions, no Batch, no fine-tuning); tools: function calling, web_search, hosted_shell, skills; streaming, structured outputs, prompt caching. Also via Codex clients; Command Code resells at $2/$8 cache $0.50 (Pro plan $20/mo+); OpenCode Zen lists $1.75/$14 cache $0.175. Status: **Deprecated** (official docs; AA index N/A).
- **Release / knowledge:** Announced 2026-02-05 (OpenRouter lists API availability Feb 24 — labelled); knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.3-codex` (default snapshot, deprecated); no Free tier.
- **Context window:** 400,000 total; max input 272,000; max output 128,000 (official docs).
- **Modalities:** Text + image in, text out; reasoning efforts low / medium / high / xhigh (AA measures xhigh); reasoning-token support.
- **Pricing (as of 2026-11-13):** $1.75 in / $0.175 cached (90% off) / $14 out per 1M (official); AA blended $1.87/M (7:2:1). Command Code agent-loop estimate ~$0.25 per bug-fix task (180K in @75% cache, 12K out). Rate limits Build 5K RPM/1M TPM → Grow 15K/40M.
- **Architecture:** Proprietary; parameters undisclosed. System card published (PDF, not text-extractable this pass).

### Raw benchmarks found

Vendor-reported — GPT-5.3-Codex System Card (rows via BenchLM's cited carriage; PDF itself not extractable):

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (claimed industry high at launch); OSWorld-Verified: **64.7%**
- τ²-bench: **86%** (AA carriage); Gert Labs: **57.47** (independent); JobBench: **33.7** (independent)
- GDPval: "strong performance" claimed in announcement (number in announcement/system card, not extracted — no verified value recorded)

Reasoning / knowledge:

- AA-GPQA Diamond: **91.5%**; AA-HLE: **42.5%**; CritPt: **16.9** (AA independent runs)
- AA Intelligence Index: **32.5, #49/74** (v4.3-era carriage via Command Code; AA live page now N/A — deprecated). Never compared with current v5.0.1 indices.
- AA-IFBench: **75.4**; AA-LCR: **83.3**
- BenchLM overall: **61.73, #45/1033** (21/830 rows, partial coverage)

Coding:

- SWE-bench Verified: **85%** (vendor; Vals independent: **78.0%** — labelled gap); SWE-bench Pro: **56.8%** (claimed industry high at launch)
- LiveCodeBench (Vals): **87.3**; SWE-Rebench: **58.2** (independent); Vibe Code Bench: **61.77** (Vals v1.1); PostTrainBench v1: **17.8**
- AA Coding index: not yet scored (Command Code)

Multimodal / long context:

- AA-MMMU-Pro: **78.5%** (independent; only vision eval found — image input supported, no video/audio)
- AA-LCR 83.3 at the 400K window; no MRCR/MLCR found; no long-context surcharge documented
- Design Arena Website: **1157** (OpenRouter carriage)

Performance:

- AA: 74 tok/s output, TTFT (first answer token) 44.46s — high vs price-tier median 13.62s; no $/task (index N/A)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.0 77.3 (launch-era industry high), τ² 86, OSWorld-V 64.7 and hosted_shell/skills tooling are strong for a coding agent; capped by OSWorld below general-flagship levels, JobBench 33.7 and no GDPval/MCP verified rows.
- **Reasoning: 80/100.** GPQA 91.5, HLE 42.5 and v4.3-era index 32.5 sit above GPT-5.2's generation; capped by CritPt 16.9, IFBench 75.4 and the deprecated status removing live index verification.
- **Context window: 78/100.** 400K maps to the ~78 tier with LCR 83.3 and no surcharge; capped by the 272K max-input partition and no million-token retrieval evidence.
- **Multimodal: 75/100.** Image input with a single independent MMMU-Pro 78.5 row lands mid-band for image-in models; capped by no vendor vision suite, no video/audio.
- **Coding: 86/100.** SWE-V 85 vendor (Vals 78.0), SWE-Pro 56.8 and TB2.0 77.3 launch-era industry highs, LCB 87.3, Vibe 61.77 make this the standout dimension; capped by the Vals SWE-V gap, SWE-Rebench 58.2 and PostTrainBench 17.8.
- **Cost efficiency: 70/100.** $1.75/$14 with 90% cache discount and ~$0.25/agent-task is workable, but output is expensive vs tier median, TTFT 44.46s is slow, and the model is deprecated — value decays as successors absorb the tier.
- **Overall Score: 79.8/100.** (80+80+78+75+86)/5 = 79.8. Best fit: dedicated agentic-coding workloads in Codex-style harnesses (historical reference now that it is deprecated); general-purpose users should prefer current successors.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official developers.openai.com model doc read in full, AA page, BenchLM full row set, Command Code tracker, OpenRouter listing via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: vendor SWE-V 85 vs Vals 78.0; official $1.75/$14 vs Command Code resale $2/$8; AA index 32.5 is a v4.3-era carriage (live page N/A, deprecated) — never compared with v5.0.1 indices; announcement Feb 5 vs OpenRouter Feb 24 listing; system-card PDF returned raw binary and openai.com/index announcement 403 — system-card numbers taken via BenchLM's cited carriage, GDPval claim left unquantified.
- Reference URLs:
  - [GPT-5.3-Codex — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
  - [GPT-5.3 Codex (xhigh) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-3-codex)
  - [GPT-5.3 Codex — BenchLM](https://benchlm.ai/models/gpt-5-3-codex)
  - [GPT-5.3 Codex — Command Code](https://commandcode.ai/models/gpt-5-3-codex)
  - [GPT-5.3-Codex System Card (PDF, linked via BenchLM; not text-extractable)](https://cdn.openai.com/pdf/23eca107-a9b1-4d2c-b156-7deb4fbc697c/GPT-5-3-Codex-System-Card-02.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. The announcement page (openai.com/index/introducing-gpt-5-3-codex, 403 this pass) and Vals AI model page are good verification targets.