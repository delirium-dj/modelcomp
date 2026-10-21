# DeepSeek V4 Vision Exp — findings by Step 5 Preview

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`opencode/deepseek-v4-vision-exp`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp (DeepSeek-V4-Flash-Vision-Exp)
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family — the V4-Flash architecture plus visual modules and continued training (305B, MIT), improving multimodal agent capability over V4-Flash-0731 while holding text-agent performance; ZeroBench 35.0% tops Opus 4.8's 34.0%.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`, MIT license); DeepInfra inference provider ("NEW" listing); vLLM/SGLang serving with the `deepseek_v4` tool-call + reasoning parsers and DSpark speculative decoding; free Zen tier per catalog (unverified in this research).
- **Release / knowledge:** experimental checkpoint; HF repo updated 2026-09-01 (V4-Flash-0731 base 2026-07-31); knowledge cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (HF + DeepInfra); `opencode/deepseek-v4-vision-exp` (Zen catalog slug).
- **Context window:** not stated on the model card; catalog metadata lists 200K (unverified in this research) — scored on the 200K claim with that caveat.
- **Modalities:** image + text in; text out; reasoning (max-effort evaluable); tool calling (`--tool-call-parser deepseek_v4`).
- **Pricing (as of 2026-10-21):** MIT open weights — free self-host; hosted DeepInfra listing live, price not captured in this research; Zen free-tier access per catalog (unverified here).
- **Architecture:** 305B-parameter MoE (V4-Flash base) + vision encoder + aligner; DFlash attention, Hyper-Connections, DSpark speculative path; BF16/FP8/I8 weights; serves on a single 4×GB300 node for vLLM.

### Raw benchmarks found

Official DeepSeek model card (DeepSeek Harness, minimal mode, max reasoning effort, temp=1.0, top_p=0.95; Opus-4.8 reference from the same table):

Agent / tool use (text-agent rows):

- Terminal-Bench 2.1: **83.9%** (ref: Opus-4.8 85.0%, V4-Flash-0731 82.7%)
- Toolathlon-Verified: **75.9%** (ref: Opus-4.8 76.2%, V4-Flash-0731 70.3%)
- Cybergym: **75.3%** (ref: Opus-4.8 78.3%, V4-Flash-0731 76.7%)
- DeepSWE: **59.3%** (ref: Opus-4.8 58.0% — beats the reference, V4-Flash-0731 54.4%)
- DSBench-Hard: **63.6%** (ref: Opus-4.8 71.7%)
- NL2Repo: **57.7%** (ref: Opus-4.8 69.7%)
- AutomationBench (Public): **25.7%** (ref: Opus-4.8 27.2%)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Multimodal agent rows:

- ApexBench (Pass@1): **36.5%** (ref: Opus-4.8 39.4%; V4-Flash-0731 26.2% ignores multimodal input)
- Agents' Last Exam: **27.3%** (ref: Opus-4.8 25.7% — beats the reference, V4-Flash-0731 25.2%†)
- Chartography: **64.3%** (ref: Opus-4.8 65.0%)
- ZeroBench (Pass@5): **35.0%** (ref: Opus-4.8 34.0% — beats the reference)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found for this exact checkpoint (the card publishes none)
- Agents' Last Exam 27.3% and ZeroBench 35.0% (above) are the only published reasoning-adjacent numbers

Coding:

- DeepSWE: **59.3%** (listed above — mid-band)
- Terminal-Bench 2.1: **83.9%** (listed above — strong)
- NL2Repo: **57.7%** (listed above — mid)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published; window itself unverified (catalog 200K claim).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 83.9% and Toolathlon-Verified 75.9% / Cybergym 75.3% are strong agentic numbers that hold text-agent parity with V4-Flash; capped by NL2Repo 57.7%, DSBench-Hard 63.6%, AutomationBench 25.7% and a mid 36.5% ApexBench — and by no Tau3/GDPval/Claw-Eval numbers in any harness.
- **Reasoning: 62/100.** No GPQA/HLE/CritPt/Index figure is published for this checkpoint; the available proxies — Agents' Last Exam 27.3%, ZeroBench Pass@5 35.0%, Chartography 64.3% — sit in the mid reference bands, so the score is a provisional mid-band interpretation, not a frontier read.
- **Context window: 70/100.** The model card states no window; the catalog's 200K claim is scored at the 200K=70 tier point and explicitly flagged unverified — a verified shorter/longer window would move this score materially.
- **Multimodal: 68/100.** Image + text input with text out (image-in tier 60–70); ZeroBench 35.0% beating Opus-4.8 (34.0%) and Agents' Last Exam 27.3% vs 25.7% are genuine vision strengths, but there is no video/audio input and no non-text output.
- **Coding: 74/100.** Terminal-Bench 2.1 83.9% is the standout, and DeepSWE 59.3% edges the Opus-4.8 reference (58.0%); capped by NL2Repo 57.7% (vs Opus 69.7%) and no published SWE-bench Verified / LiveCodeBench / SciCode numbers.
- **Cost efficiency: 95/100.** MIT-licensed 305B open weights (free self-host, INT4/FP8 quants available) put the floor at $0; the DeepInfra hosted price and the claimed Zen free tier are unverified here, so the score leans on the free self-host lane.
- **Overall Score: 71/100.** Mean of (82 + 62 + 70 + 68 + 74) / 5 = 71.2 → 71. Best fit: an experimental open-weight image-to-code / visual-agent checkpoint to self-host and evaluate — strong vision-agent behavior for an MIT model, but its unverified context window and missing text-reasoning numbers keep it off the frontier shelf.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (DeepSeek official HF model card + benchmark table, Hugging Face inference-provider listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
