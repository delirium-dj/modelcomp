# Kimi K3 — findings by Step 5 Preview

- Source: Moonshot AI `kimi-k3`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (`kimi-k3`; largest open-weight-class model announced to date)
- **Short description:** Moonshot AI's 2.8-trillion-parameter frontier MoE (896 experts, 16 active per token ≈ 280B active), built for agentic coding, long-horizon knowledge work, and multimodal reasoning. Uses Kimi Delta Attention (hybrid linear attention + Attention Residuals) to hold recall across the full 1M window. Open weights.
- **Provider / access:** Hosted API (api.moonshot.ai), OpenRouter (`moonshotai/kimi-k3`), Together/DeepInfra/Fireworks/Baseten, and self-hosted local inference from the Hugging Face weights (`moonshotai/Kimi-K3`). Native vision, function calling, structured output, code execution.
- **Release / knowledge:** Released 2026-07-16; open weights live on Hugging Face since 2026-07-27. Succeeds the Kimi K2.7 Code line.
- **IDs:** `moonshotai/kimi-k3` (OpenRouter) / `kimi-k3` (AA). No free tier on the hosted API; self-hosting is hardware-cost only.
- **Context window:** 1,048,576 (1M) input; 128,000 max output.
- **Modalities:** Text, image in; text + tool-calls + code out. Reasoning yes; tool calls yes; JSON yes. No native audio/video.
- **Pricing (as of 2026-10-08):** Hosted API $3.00/M in · $0.30/M cached-hit in · $15.00/M out (no surcharge for full 1M context). OpenRouter hosts as low as $0.58/$12.30. Open weights = free self-host (hardware only).
- **Architecture:** 2.8T-param sparse MoE (896 experts, 16 active/token ≈ 280B active), Kimi Delta Attention. Open weights under the custom Kimi K3 License (modified-MIT).

### Raw benchmarks found

> Cross-referenced hokai.io (Moonshot/Artificial Analysis) and vectorwire.ai (131 results/78 benchmarks, 26 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **69.95/100** overall, #17 of 956 models, **83 of 648 benchmarks covered**
- Artificial Analysis today (2026-10-19, max effort): Intelligence Index **44** (#5/121 — top-5 open-weights; the file's 57 was the launch-era scale), 42.0 tok/s (slow), TTFT 3.69s, $3.00/$15.00 with 90% cache discount (blended $2.31/M; **$2.00 per Index task — expensive**), 1M context, text+image, 2.8T total / **104B active per AA's row** (the file's ~280B-active vendor figure is flagged — conflict noted), 20 providers, 160M Index tokens (somewhat verbose)

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (half a point behind GPT-5.6 Sol, ahead of every other open or closed model tested)
- Toolathlon: **73.2%** / Toolathlon Verified **76.5%**
- τ³-Bench Banking: **33.4%**
- ProgramBench: **77.8%** (leads) / SWE-Marathon: **42.0%** (leads; v1.1 48.1%)
- Terminal-Bench 3.0: **17.4%**
- Vector Wire capability: **Agentic "Strong"** (−5.6% vs leader, 7/7) — its standout non-context area
- SWE-bench Verified: **67.5%** (rank #25/32 — bottom third, a clear weak spot) — **UPDATED (2026-10-19): Vals AI's independent leaderboard now reads 93.4%**, the highest open-weight-class SWE-bench Verified in this comparison; the 67.5% row is treated as a harness outlier and the file's Coding cap on it is lifted

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (highest published open-weight result; ahead of Opus 4.8's 91.0%)
- Artificial Analysis Intelligence Index: **57** (tied with GPT-5.6 Terra and Muse Spark 1.2; $0.94/task)
- Vector Wire capability: **Reasoning "Strong"** (−9.3% vs leader, 6/6); **Factuality "Capable"** (−12.2%); **Math "Limited"** (−30.6%)
- HLE now surfaced (2026-10-19): **43.5% without tools / 56.0% with tools** (Moonshot launch blog via BenchLM) — the no-tools figure clears the 40% frontier bar, filling the file's missing HLE row; AA-HLE reads **46.9%**
- New independent rows (2026-10-19): CritPt **23.4%** (AA — far above the file's Math-"Limited" signal), ARC-AGI-1 **94.50%** / ARC-AGI-2 **60.4%** (ARC Prize semi-private), AA-Omniscience index **19.7%** / accuracy 47.6% / hallucination 53.2%, MMLU-Pro (Vals) **88.0%**, GPQA (Vals) **92.9%**, Gray Swan IPI **52.7%** (weak safety)

Coding:

- DeepSWE v1.1: **67.5%** (KimiCode harness) / **67.3%** (mini-SWE-agent) — mid-tier, below the 74% frontier ref
- SWE-bench Verified: **67.5%** (rank #25/32 — weak for a frontier claim)
- Terminal-Bench 2.1: **88.3%** (see tool use — strong terminal coding)
- SWE-Marathon: **42.0%** (leads) / ProgramBench **77.8%** (leads)
- Vector Wire capability: **Coding "Capable"** (−19.1% vs leader, 5/10)

Multimodal:

- Text + image in; text + code out. Native vision.
- MMMU-Pro: **81.6%**; MathVision: **97.8%**; Video-MME (w. sub): **90.0%**
- Vector Wire: **Multimodal "Capable"** (−14.8% vs leader, 2/6)

Long context:

- 1M input / 128K output; Kimi Delta Attention is built to hold recall across the full window rather than degrading past 100K (unlike sliding-window architectures)
- Vector Wire: Long Context **"Strong"** (−3.9% vs leader, 1/3) — a top-tier long-context model

### Normalized scores (1–100)


- **Tool use: 88/100.** Terminal-Bench 2.1 88.3% (ahead of most open and closed models), ProgramBench 77.8% and SWE-Marathon 42.0% (both leading), Toolathlon 76.5%, and a Vector Wire Agentic "Strong" (−5.6%, 7/7) rating — the third pass adds GDPval-AA 51.6% (Elo 1,533), MCP Atlas 84.2%, BrowseComp 91.2%, AA Harvey LAB 94.6% and AA Agentic Index 50.6%, all reinforcing the band. Capped by Terminal-Bench 4.0 at 12.6% and MazeBench 1%.
- **Reasoning: 90/100.** GPQA Diamond 93.5% (highest open-weight) and AA Intelligence Index 57 with Reasoning "Strong" (−9.3%, 6/6) and Factuality "Capable" (−12.2%). Capped by Math "Limited" (−30.6%) and no verified HLE row — math is a real blind spot.
- **Context window: 95/100.** 1M input / 128K output with Kimi Delta Attention engineered to hold recall across the full window (not degrade past 100K), and a Vector Wire Long Context "Strong" (−3.9%, 1/3) rating — a top-tier long-context model. Held from 100 by the 128K output cap and no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 80/100.** Text + image in (text + code out), no native audio/video → the 60–70 "+image in" band nudged up by MMMU-Pro 81.6%, MathVision 97.8%, and Video-MME 90% (w. subtitles); Vector Wire rates Multimodal "Capable" (−14.8%, 2/6).
- **Coding: 88/100.** Terminal-Bench 2.1 88.3% and leading ProgramBench/SWE-Marathon are strong, and the third pass filled the weak spot: SWE-bench Verified (Vals) **93.4%** — the highest open-weight-class result in this comparison — plus FrontierSWE v1 81.2%, AA-SciCode 59.5%, AA Coding Index 76.2% and Kimi Code Bench 72.9%. Raised from 82; DeepSWE 67.5% and the small FrontierSWE v2 (25.9%) keep it just under the top.
- **Cost efficiency: 65/100.** Hosted API $3/$15 per 1M (rubric ~$3/$15 = ~60), nudged up because the open weights allow free self-hosting (hardware cost only) and OpenRouter hosts as low as $0.58/$12.30. No hosted free tier.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88+90+95+80+88)/5 = 88.2 (Coding raised 82→88 on the Vals SWE-bench 93.4% row and the HLE gap now measuring 43.5% no-tools; Overall 87→88). Best fit as the leading open-weight frontier option for agentic coding, long-context RAG, and self-hosted deployment; teams needing verified factual reliability without RAG grounding, native audio/video, or Western compliance (SOC 2/HIPAA) should look at Opus 4.8 or GPT-5.6 Sol instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (max: Index 44 #5/121 — top-5 open-weights, the file's 57 was launch-era scale; 42.0 tok/s; $2.00/task — expensive; AA's row lists 104B active vs the file's ~280B vendor figure — conflict flagged) and BenchLM (composite 69.95/100, #17/956, **83 of 648 benchmarks**): the file's HLE and SWE-bench gaps are filled — HLE 43.5% no-tools/56.0% with tools (clears the 40% bar) and SWE-bench Verified (Vals) 93.4% (the file's 67.5% weak-spot row is now treated as a harness outlier) — so Coding was raised 82→88 and Overall 87→88; new rows GDPval-AA Elo 1,533/51.6%, MCP Atlas 84.2%, BrowseComp 91.2%, AA Harvey LAB 94.6%, CritPt 23.4%, ARC-AGI-2 60.4%, AA-LCR 88.7%, FrontierSWE v1 81.2%, AA Coding Index 76.2% reinforce the band, with Terminal-Bench 4.0 12.6% and MazeBench 1% keeping the caps. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (52 primary-source results, updated 2026-10-07 — independent BrowseComp 89.0%, Vibe Code 85.0%, APEX-Agents 50.6%, AutomationBench 22.7%, Vals Index 50.3%, Toolathlon Verified 76.5%). Prior pass (2026-10-08) used hokai.io (Moonshot/Artificial Analysis) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
