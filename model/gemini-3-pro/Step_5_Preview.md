# Gemini 3 Pro — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3-pro`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (`gemini-3-pro` / `gemini-3-pro-preview`; thinking-high default)
- **Short description:** Google DeepMind's Gemini 3-generation Pro model (released 2025-11-18, the base of the Gemini 3 line). A frontier multimodal model with a 1M-token context, now superseded within Google's own lineup by Gemini 3.1 Pro, 3.5/3.6/3.7/3.8 Flash, and Gemini 4 Argon.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI. Function calling + structured output + reasoning. No free API tier (free only in AI Studio web UI).
- **Release / knowledge:** Released 2025-11-18. Knowledge cutoff not explicitly disclosed for this generation.
- **IDs:** `gemini-3-pro` / `gemini-3-pro-preview` (+ `-low`/`-high`). No free/contributor ID.
- **Context window:** 1,048,576 (1M) input (2M in some configs); 64K max output.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning yes (thinking-high); tool calls yes; JSON yes. No image/audio output.
- **Pricing (as of 2026-10-08):** $2.00/M in · $12.00/M out (per Artificial Analysis). No free API tier.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced vectorwire.ai (194 results/129 benchmarks, 41 independent, capability profile) and Google's official DeepMind benchmark table (the "Gemini 3 Pro Thinking (High)" column). Independent runs noted where available.

Agent / tool use:

- τ²-Bench Retail: **85.3%** / Telecom: **98.0%** (Google; AA Telecom run 87.13% high / 68.13% low)
- MCP Atlas (multi-step MCP workflows): **54.1%** (Google)
- BrowseComp (agentic search): **59.2%** (Google)
- Terminal-Bench 2.0 (Terminus-2 harness): **56.9%** (Google)
- APEX-Agents (long-horizon professional): **18.4%** (Google) — weak
- Vector Wire capability: **Agentic "Limited"** (−38.6% vs leader, 3/7) — its weakest area

Reasoning / knowledge:

- GPQA Diamond: **91.9%** no tools (Google)
- Humanity's Last Exam (no tools): **37.5%** (Google) — just below the 40% frontier bar
- ARC-AGI-2: **31.1%** (ARC Prize verified) — low for a Pro-tier model
- MMMLU (multilingual): **91.8%** (Google)
- Vector Wire capability: **Reasoning "Capable"** (−18.0% vs leader, 5/6); **Factuality "Capable"** (−23.2%); **Instruction Following "Capable"** (−21.6%)
- AIME 2025 / live AA Intelligence Index: not surfaced live for 3 Pro — treated as provisional

Coding:

- SWE-bench Verified: **76.2%** (Google) — mid-tier (well behind Opus 5.5's 89.9%)
- SWE-bench Pro (Public): **43.3%** (Google) — mid-tier on the harder diverse suite
- LiveCodeBench Pro (Elo): **2,439** (Google)
- SciCode: **56%** (Google)
- Vector Wire capability: **Coding "Limited"** (−26.4% vs leader, 7/10) — a clear weakness for a Pro-tier model

Multimodal:

- Text + image + audio + video + PDF in; text out.
- MMMU-Pro (no tools): **81.0%** (Google); MMMU **82%**
- Vector Wire: **Multimodal "Frontier"** (leads 5/6) — its standout capability

- **Tool use: 74/100.** τ²-Bench Retail 85.3% / Telecom 98.0% are strong, but MCP Atlas 54.1%, BrowseComp 59.2%, Terminal-Bench 2.0 56.9%, and APEX-Agents 18.4% are mid-to-weak, and Vector Wire rates Agentic "Limited" (−38.6% vs leader) — its weakest area. Strong retail/tool scores do not carry to long-horizon agentic work.
- **Reasoning: 84/100.** GPQA Diamond 91.9% is near-ceiling and MMMLU 91.8% is strong. Capped by HLE 37.5% (just under the 40% frontier bar), ARC-AGI-2 31.1% (low for a Pro-tier model), and Vector Wire's Reasoning "Capable" (−18.0%) with Factuality "Capable" (−23.2%) — solid but not frontier reasoning.
- **Context window: 88/100.** 1M input / 64K output with Long Context "Strong" (−8.6%), but MRCR retrieval collapses from 77.0% at 128K to 26.3% at 1M — a nominal 1M window with weak top-end retrieval. The 64K output cap is a further caveat.
- **Multimodal: 92/100.** Full input coverage (text/image/audio/video/PDF) with MMMU-Pro 81.0% and a Vector Wire Multimodal "Frontier" (leads 5/6) rating — its standout capability. Just under the ceiling because output is text-only.
- **Coding: 72/100.** SWE-bench Verified 76.2% and LiveCodeBench Pro Elo 2,439 are mid-tier, but SWE-bench Pro 43.3% is weak and Vector Wire rates Coding "Limited" (−26.4%, 7/10) — a clear weakness for a Pro-tier model. Well behind the current coding frontier (Opus 5.5 ~90%).
- **Cost efficiency: 78/100.** Paid-only at $2/$12 per 1M (between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end). No free API tier.
- **Overall Score: 82/100.** Mean of the five non-cost dims (74+84+88+92+72)/5 = 82.0. Best fit as a strong frontier multimodal model with a 1M context for image/video/document understanding; look elsewhere for the hardest agentic coding or long-horizon agent loops (both "Limited"), and note it is superseded within Google's lineup by 3.1 Pro and the newer Flash/Argon tiers.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced vectorwire.ai (194 results, 41 independently verified, capability profile) and Google's official DeepMind benchmark table.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Long context:

- 1M input / 64K output. MRCR v2 8-needle 128k average: **77.0%**; 1M pointwise: **26.3%** (Google) — retrieval collapses at the top of the window
- Vector Wire: Long Context **"Strong"** (−8.6% vs leader, 3/3)

### Normalized scores (1–100)
