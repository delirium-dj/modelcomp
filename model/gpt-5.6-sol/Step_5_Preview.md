# GPT-5.6 Sol — findings by Step 5 Preview

- Source: OpenAI `gpt-5.6-sol`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (`gpt-5.6-sol`; OpenAI's flagship GPT-5.6 model)
- **Short description:** OpenAI's flagship GPT-5.6 model for maximum capability — coding, agentic work, science, and cybersecurity with ultra multi-agent coordination and programmatic tool calling. Adds ultra mode (multi-agent parallel workstreams), PTC, and a pro reasoning mode that its cheaper siblings (Terra, Luna) don't get. Default model in the enterprise Copilot suite.
- **Provider / access:** OpenAI API (Responses API + Chat Completions), ChatGPT, Codex, Microsoft Copilot, select gateways. Enterprise ZDR, US/EU residency, SOC2/ISO27001/GDPR/HIPAA. No free tier.
- **Release / knowledge:** Released 2026-07-09 (GA; preview from 2026-06-26). Knowledge cutoff June 2026.
- **IDs:** `gpt-5.6-sol` (+ `-low/-medium/-high/-xhigh/-max`/pro). No free/contributor ID.
- **Context window:** 1,000,000 (1M) input; 64,000 max output. **Spec corrected (2026-10-19):** the file previously carried 200K input, but Artificial Analysis and BenchLM both list 1M (1.05M on BenchLM), and OpenAI's own GPT-5.6 launch table reports Sol's MRCR v2 at the 512K–1M range (73.8% — documented in the GPT-5.6 Luna report) — two live trackers plus the vendor's own long-range eval confirm the 1M window.
- **Modalities:** Text, image in; text, tool-calls, code out. Vision (audio/video out of scope). Reasoning yes (none–xhigh/max + pro mode); tool calls yes (incl. PTC); JSON yes.
- **Pricing (as of 2026-10-08):** $5.00/M in · $30.00/M out (hokai/OpenAI; ~2× Terra) · $0.625/M cached in (90% off). AA lists $4/$20. No batch discount at launch.
- **Architecture:** Proprietary; parameter count undisclosed. 2× token efficiency vs prior generation.

### Raw benchmarks found

> Cross-referenced hokai.io (OpenAI + Artificial Analysis) and vectorwire.ai (199 results/119 benchmarks, 28 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **75.31/100** overall, #10 of 956 models, 70 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **47** (max, #27/217, 4/4 units — the prior 62 was the old v4.1 scale; 58.9 was the launch read), 87.7 tok/s (#88/186), TTFT 91.80s, $4.00/$20.00 with 90% cache discount (blended $3.08/M; $1.99 per Index task), 1M context, 8 providers — DEPRECATED on AA (suggests GPT-6 Sol)

Agent / tool use:

- Artificial Analysis Intelligence Index: **62** (max effort) — frontier-leading composite **[old v4.1 scale; the current v4.3.2 read is 47, #27/217 — see the third-pass note]**
- LMArena Chatbot Arena: **#1** (rank #1 overall, independent)
- New independent rows (2026-10-19): Terminal-Bench 2.1 **91.9%** (OpenAI launch table — above the file's 88.8%), BrowseComp **92.2%** (OpenAI), OSWorld 2.0 **62.6%**, CyberGym **84.5%**, ExploitGym **33.7%**, Toolathlon **58%**, GDPval-AA **55.4% normalized / Elo 1,735** (AA/OpenAI), AA ITBench **56.2%**, Terminal-Bench Hard **65.9%**, AA Agentic Index **50.5%**, ApprenticeBench **26%**, MazeBench **13%**
- τ²-Bench Telecom: **85.09%** (max) / 84.8% (xhigh) (Artificial Analysis)
- τ³-Bench Banking: **33.0%**
- BrowseComp (agentic search): **90.6%** (Mercor web-research agent, xHigh, independent — reported 2026-10-07) / 90.4% (OpenAI launch); strong
- Vector Wire capability: **Agentic "Frontier"** (leads 7/7) — its standout area; ultra multi-agent mode + programmatic tool calling (PTC)

Reasoning / knowledge:

- GPQA Diamond: **72.1%** (vendor-reported; rank #41/50 — bottom third on PhD science) — **CONFLICT RESOLVED (2026-10-19):** today's OpenAI launch row via BenchLM reads **94.6%**, with AA-GPQA 94.1% and Vals 95.2% corroborating near-ceiling; the earlier 72.1% is treated as stale/misattributed
- Humanity's Last Exam: **22.1%** (vendor-reported) — **CONFLICT RESOLVED (2026-10-19):** today's AA-HLE reads **49.5%** and a DeepMind cross-ref lists HLE-Verified **54.5%** — both clear the 40% frontier bar; the earlier 22.1% is treated as stale/misattributed
- Aider Polyglot: **76.8%** (vendor-reported)
- New verified rows (2026-10-19): GPQA **94.6%** (OpenAI launch; AA 94.1%, Vals 95.2%), AA-HLE **49.5%**, HLE-Verified **54.5%** (DeepMind cross-ref), ARC-AGI-1 **96.50%** / ARC-AGI-2 **92.5%** (ARC Prize — the file's missing ARC rows, near-frontier), ARC-AGI-3 7.8%, CritPt **32.3%** (AA), AA-LCR **84.0%** (AA), Epoch/OpenAI FrontierMath v2 Tiers 1–3 **89.0%** / Tier 4 **83.0%**, GeneBench-Pro 28.7%, AA-IFBench 72.7%, LABBench2 82.1%, AA-Omniscience accuracy 59.4% / index 22.0% / hallucination 92.2%, MMLU-Pro (Vals) 89.1%, HealthBench Professional 60.5%
- Vector Wire capability: **Reasoning "Strong"** (−2.6% vs leader, 6/6); **Math "Strong"** (−9.3%); **Factuality "Capable"** (−18.7%); **Instruction Following "Capable"** (−21.0%)
- AIME 2025: not surfaced live for Sol — treated as provisional

Coding:

- SWE-bench Verified: **78.5%** (vendor-reported; rank #15/32 — mid-pack) **but 96.2%** on the Vals AI mini-swe-agent harness at max (independent, reported 2026-09-01) — a 17.7-point conflict; SWE-bench Verified is a saturated/retired board, so harness choice dominates and the true agentic-coding figure is ambiguous
- Aider Polyglot: **76.8%** (see reasoning)
- Terminal-Bench 2.1: **88.8%** (OpenAI launch) / **85.8%** (Vals AI Terminus-2, independent — reported 2026-09-28)
- Vector Wire capability: **Coding "Strong"** (−6.2% vs leader, 7/10) — near-frontier
- SWE-bench Pro / LiveCodeBench exact rows: not surfaced live for Sol — treated as provisional
- New coding rows (2026-10-19): SWE-bench Pro **64.6%** (OpenAI launch table — the file's gap filled), LiveCodeBench (Vals) **82.6%**, DeepSWE **72.7%** (OpenAI), FrontierCode 1.1 Extended **60.6%** (Cognition), CursorBench 3.2 **67.2%** / 4.0 **41.7%**, VulcanBench v3 **87.0%**, AA-SciCode **57.1%**, AA Coding Index **77.4%**, FrontierSWE v2 **32.2%**, PostTrainBench 36.2%, Bug Hunt Bench **42.0 fixes** (field-leading); AA-MMMU-Pro **83.4%** (first published MMMU for Sol; OpenAI launch 83.0%/84.6%)
- Ultra mode reduces wall-clock time and improves performance on complex tasks that divide into independent workstreams

Multimodal:

- Text + image in; text + code out. No audio/video input, no image output.
- Vector Wire: **Multimodal "Capable"** (−18.3% vs leader, 2/6)

Long context:
- **Tool use: 90/100.** AA Intelligence Index 62 (frontier-leading), LMArena #1, τ²-Bench Telecom 85.09%, and a Vector Wire Agentic "Frontier" (leads 7/7) rating — plus ultra multi-agent coordination and programmatic tool calling (PTC) that siblings lack. Capped only by τ³-Bench Banking 33.0% and the vendor-reported nature of several tool numbers.
- **Reasoning: 90/100.** AA Intelligence Index 62 **[old scale; 47 on the current v4.3.2, #27/217]** with Reasoning "Strong" (−2.6%, 6/6) and Math "Strong" (−9.3%). The third pass resolved two stale caps: GPQA now reads 94.1–95.2% (OpenAI/AA/Vals — not the earlier 72.1%) and HLE reads 49.5–54.5% (AA/DeepMind — not 22.1%), with ARC-AGI-2 92.5% and FrontierMath v2 89.0%/83.0% corroborating the frontier band. Held at 90 by the current-scale Index of 47 and the still-missing verified AIME row.
- **Context window: 88/100.** **Spec corrected to 1M input** (Artificial Analysis + BenchLM; OpenAI's own launch table reports Sol's MRCR v2 at 73.8% in the 512K–1M range) with 64K output. Raised from 70 (the old "200K = 70" tier) on that verified evidence; held below the top tier because the 73.8% deep-window MRCR is short of the ≥98%-at-512K bar and the output cap is 64K.
- **Multimodal: 68/100.** Text + image in (text + code out), no audio/video input and no non-text output → the 60–70 "+image in" band; Vector Wire rates Multimodal "Capable" (−18.3%, 2/6).
- **Coding: 86/100.** Independent Terminal-Bench 2.1 85.8% (Vals Terminus) and BrowseComp 90.6% (Mercor) plus Aider Polyglot 76.8% and a Coding "Strong" (−6.2%, 7/10) rating — near-frontier, with ultra mode improving complex multi-workstream tasks. Capped by the SWE-bench Verified conflict (78.5% vendor vs 96.2% Vals independent on a saturated/retired board — the true figure is harness-ambiguous) and no live SWE-bench Pro/LiveCodeBench row.
- **Cost efficiency: 60/100.** Paid-only at $5/$30 per 1M (~2× Terra; AA lists $4/$20); cached input $0.625/M (90% off) and 2× token efficiency soften it, but no batch discount at launch and no free tier.
- **Overall Score: 84/100.** Mean of the five non-cost dims (90+90+88+68+86)/5 = 84.4 (Context raised 70→88 on the corrected 1M spec; the two stale reasoning caps — GPQA 72.1/HLE 22.1 — were resolved to frontier reads, keeping Reasoning at 90). Best fit for senior engineering teams running frontier coding, cybersecurity research, and complex multi-agent workflows where quality matters more than cost (its 64K output cap and the current-scale Index of 47 are the trade-offs); route high-volume or long-document work past 64K output to Terra/Luna or a 1M-context model instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated page, suggests GPT-6 Sol: Index 47 #27/217 on the current v4.3.2 scale — the prior 62 was old-scale; $4/$20 confirmed) and BenchLM (composite 75.31/100, #10/956, 70/644 benchmarks). Two corrections this pass: (1) the context spec is 1M, not 200K — AA + BenchLM list 1M and OpenAI's own launch table reports Sol's MRCR v2 at 73.8% in the 512K–1M range — so Context was raised 70→88 (Overall 81→84); (2) the file's GPQA 72.1% and HLE 22.1% vendor figures are contradicted by today's OpenAI launch/AA/Vals reads (GPQA 94.1–95.2%, HLE 49.5–54.5%, ARC-AGI-2 92.5%) and are treated as stale — Reasoning stays 90, now capped by the current-scale Index 47 and the missing AIME row. New rows: TB2.1 91.9%, BrowseComp 92.2%, GDPval-AA Elo 1,735, SWE-bench Pro 64.6% (fills the prior gap), Bug Hunt Bench 42.0 fixes (field lead), AA-MMMU-Pro 83.4% (first MMMU). Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (55 primary-source results, updated 2026-10-07 — independent Vals AI SWE-bench Verified 96.2% vs the 78.5% vendor figure [saturated-board conflict, documented], TB2.1 85.8%, BrowseComp 90.6%). Prior pass (2026-10-08) used OpenAI + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


- 200K input / 64K output. Vector Wire: Long Context **"Strong"** (−5.1% vs leader, 1/3) — efficient use of its window, but the absolute window is only 200K (rubric: 200K = 70). No explicit MRCR ≥98%-at-512K figure (the window does not reach 512K).

### Normalized scores (1–100)
