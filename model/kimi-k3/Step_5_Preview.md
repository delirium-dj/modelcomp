# Kimi K3 — findings by Step 5 Preview

- Source: Moonshot AI `kimi-k3`
- Date: 2026-10-10 (UTC) — second-pass verification
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

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (half a point behind GPT-5.6 Sol, ahead of every other open or closed model tested)
- Toolathlon: **73.2%** / Toolathlon Verified **76.5%**
- τ³-Bench Banking: **33.4%**
- ProgramBench: **77.8%** (leads) / SWE-Marathon: **42.0%** (leads; v1.1 48.1%)
- Terminal-Bench 3.0: **17.4%**
- Vector Wire capability: **Agentic "Strong"** (−5.6% vs leader, 7/7) — its standout non-context area
- SWE-bench Verified: **67.5%** (rank #25/32 — bottom third, a clear weak spot)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (highest published open-weight result; ahead of Opus 4.8's 91.0%)
- Artificial Analysis Intelligence Index: **57** (tied with GPT-5.6 Terra and Muse Spark 1.2; $0.94/task)
- Vector Wire capability: **Reasoning "Strong"** (−9.3% vs leader, 6/6); **Factuality "Capable"** (−12.2%); **Math "Limited"** (−30.6%)
- HLE: not surfaced live for K3 — treated as provisional

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


- **Tool use: 88/100.** Terminal-Bench 2.1 88.3% (ahead of most open and closed models), ProgramBench 77.8% and SWE-Marathon 42.0% (both leading), Toolathlon 76.5%, and a Vector Wire Agentic "Strong" (−5.6%, 7/7) rating. Capped by SWE-bench Verified 67.5% (rank #25/32), τ³-Bench Banking 33.4%, and Terminal-Bench 3.0 at 17.4% — agentic breadth is strong but not uniformly frontier.
- **Reasoning: 90/100.** GPQA Diamond 93.5% (highest open-weight) and AA Intelligence Index 57 with Reasoning "Strong" (−9.3%, 6/6) and Factuality "Capable" (−12.2%). Capped by Math "Limited" (−30.6%) and no verified HLE row — math is a real blind spot.
- **Context window: 95/100.** 1M input / 128K output with Kimi Delta Attention engineered to hold recall across the full window (not degrade past 100K), and a Vector Wire Long Context "Strong" (−3.9%, 1/3) rating — a top-tier long-context model. Held from 100 by the 128K output cap and no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 80/100.** Text + image in (text + code out), no native audio/video → the 60–70 "+image in" band nudged up by MMMU-Pro 81.6%, MathVision 97.8%, and Video-MME 90% (w. subtitles); Vector Wire rates Multimodal "Capable" (−14.8%, 2/6).
- **Coding: 82/100.** Terminal-Bench 2.1 88.3% and leading ProgramBench/SWE-Marathon are strong, but DeepSWE 67.5% and SWE-bench Verified 67.5% (rank #25/32) are mid-to-weak for a frontier claim, and Vector Wire rates Coding "Capable" (−19.1%, 5/10). Terminal/program strength does not carry to the standard SWE-bench split.
- **Cost efficiency: 65/100.** Hosted API $3/$15 per 1M (rubric ~$3/$15 = ~60), nudged up because the open weights allow free self-hosting (hardware cost only) and OpenRouter hosts as low as $0.58/$12.30. No hosted free tier.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+90+95+80+82)/5 = 87.0. Best fit as the leading open-weight frontier option for agentic coding, long-context RAG, and self-hosted deployment; teams needing verified factual reliability without RAG grounding, native audio/video, or Western compliance (SOC 2/HIPAA) should look at Opus 4.8 or GPT-5.6 Sol instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (52 primary-source results, updated 2026-10-07 — independent BrowseComp 89.0%, Vibe Code 85.0%, APEX-Agents 50.6%, AutomationBench 22.7%, Vals Index 50.3%, Toolathlon Verified 76.5%) — no score change warranted. Prior pass (2026-10-08) used hokai.io (Moonshot/Artificial Analysis) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
