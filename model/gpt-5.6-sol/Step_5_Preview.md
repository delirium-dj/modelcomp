# GPT-5.6 Sol — findings by Step 5 Preview

- Source: OpenAI `gpt-5.6-sol`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (`gpt-5.6-sol`; OpenAI's flagship GPT-5.6 model)
- **Short description:** OpenAI's flagship GPT-5.6 model for maximum capability — coding, agentic work, science, and cybersecurity with ultra multi-agent coordination and programmatic tool calling. Adds ultra mode (multi-agent parallel workstreams), PTC, and a pro reasoning mode that its cheaper siblings (Terra, Luna) don't get. Default model in the enterprise Copilot suite.
- **Provider / access:** OpenAI API (Responses API + Chat Completions), ChatGPT, Codex, Microsoft Copilot, select gateways. Enterprise ZDR, US/EU residency, SOC2/ISO27001/GDPR/HIPAA. No free tier.
- **Release / knowledge:** Released 2026-07-09 (GA; preview from 2026-06-26). Knowledge cutoff June 2026.
- **IDs:** `gpt-5.6-sol` (+ `-low/-medium/-high/-xhigh/-max`/pro). No free/contributor ID.
- **Context window:** 200,000 (200K) input; 64,000 max output.
- **Modalities:** Text, image in; text, tool-calls, code out. Vision (audio/video out of scope). Reasoning yes (none–xhigh/max + pro mode); tool calls yes (incl. PTC); JSON yes.
- **Pricing (as of 2026-10-08):** $5.00/M in · $30.00/M out (hokai/OpenAI; ~2× Terra) · $0.625/M cached in (90% off). AA lists $4/$20. No batch discount at launch.
- **Architecture:** Proprietary; parameter count undisclosed. 2× token efficiency vs prior generation.

### Raw benchmarks found

> Cross-referenced hokai.io (OpenAI + Artificial Analysis) and vectorwire.ai (199 results/119 benchmarks, 28 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- Artificial Analysis Intelligence Index: **62** (max effort) — frontier-leading composite
- LMArena Chatbot Arena: **#1** (rank #1 overall, independent)
- τ²-Bench Telecom: **85.09%** (max) / 84.8% (xhigh) (Artificial Analysis)
- τ³-Bench Banking: **33.0%**
- BrowseComp (agentic search): strong (part of the agentic composite)
- Vector Wire capability: **Agentic "Frontier"** (leads 7/7) — its standout area; ultra multi-agent mode + programmatic tool calling (PTC)

Reasoning / knowledge:

- GPQA Diamond: **72.1%** (vendor-reported; rank #41/50 — bottom third on PhD science)
- Humanity's Last Exam: **22.1%** (vendor-reported) — well below the 40% frontier bar
- Aider Polyglot: **76.8%** (vendor-reported)
- Vector Wire capability: **Reasoning "Strong"** (−2.6% vs leader, 6/6); **Math "Strong"** (−9.3%); **Factuality "Capable"** (−18.7%); **Instruction Following "Capable"** (−21.0%)
- AIME 2025: not surfaced live for Sol — treated as provisional

Coding:

- SWE-bench Verified: **78.5%** (vendor-reported; rank #15/32 — mid-pack)
- Aider Polyglot: **76.8%** (see reasoning)
- Vector Wire capability: **Coding "Strong"** (−6.2% vs leader, 7/10) — near-frontier
- SWE-bench Pro / LiveCodeBench exact rows: not surfaced live for Sol — treated as provisional
- Ultra mode reduces wall-clock time and improves performance on complex tasks that divide into independent workstreams

Multimodal:

- Text + image in; text + code out. No audio/video input, no image output.
- Vector Wire: **Multimodal "Capable"** (−18.3% vs leader, 2/6)

Long context:
- **Tool use: 90/100.** AA Intelligence Index 62 (frontier-leading), LMArena #1, τ²-Bench Telecom 85.09%, and a Vector Wire Agentic "Frontier" (leads 7/7) rating — plus ultra multi-agent coordination and programmatic tool calling (PTC) that siblings lack. Capped only by τ³-Bench Banking 33.0% and the vendor-reported nature of several tool numbers.
- **Reasoning: 90/100.** AA Intelligence Index 62 with Reasoning "Strong" (−2.6%, 6/6) and Math "Strong" (−9.3%). Capped hard by GPQA 72.1% (rank #41/50, bottom third) and HLE 22.1% (well below the 40% frontier bar) — raw academic-recall reasoning lags its agentic strength, and no verified AIME row.
- **Context window: 70/100.** 200K input / 64K output — squarely in the rubric's "200K = 70" tier. Although Vector Wire rates its long-context efficiency "Strong" (−5.1%), the absolute window is only 200K, so it cannot score higher on the window-size tier.
- **Multimodal: 68/100.** Text + image in (text + code out), no audio/video input and no non-text output → the 60–70 "+image in" band; Vector Wire rates Multimodal "Capable" (−18.3%, 2/6).
- **Coding: 86/100.** SWE-bench Verified 78.5%, Aider Polyglot 76.8%, and a Coding "Strong" (−6.2%, 7/10) rating — near-frontier, with ultra mode improving complex multi-workstream tasks. Capped by the mid-pack SWE-bench Verified rank (#15/32) and no live SWE-bench Pro/LiveCodeBench row.
- **Cost efficiency: 60/100.** Paid-only at $5/$30 per 1M (~2× Terra; AA lists $4/$20); cached input $0.625/M (90% off) and 2× token efficiency soften it, but no batch discount at launch and no free tier.
- **Overall Score: 81/100.** Mean of the five non-cost dims (90+90+70+68+86)/5 = 80.8. Best fit for senior engineering teams running frontier coding, cybersecurity research, and complex multi-agent workflows where quality matters more than cost (its 200K window and weak HLE are the trade-offs); route high-volume or long-document work past 200K to Terra/Luna or a 1M-context model instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced OpenAI + Artificial Analysis (via hokai.io) and vectorwire.ai (199 results, 28 independently verified, capability profile).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


- 200K input / 64K output. Vector Wire: Long Context **"Strong"** (−5.1% vs leader, 1/3) — efficient use of its window, but the absolute window is only 200K (rubric: 200K = 70). No explicit MRCR ≥98%-at-512K figure (the window does not reach 512K).

### Normalized scores (1–100)
