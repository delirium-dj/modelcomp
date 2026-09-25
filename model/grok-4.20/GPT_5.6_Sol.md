# Grok 4.20 — findings by GPT 5.6 Sol

- Source: xAI (`grok-4.20-0309-reasoning`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning; paid API, no OpenCode Zen Free ID)
- **Short description:** Proprietary xAI general-purpose reasoning model optimized for fast text/image reasoning, coding, and agentic tool calling. The canonical dated reasoning ID is `grok-4.20-0309-reasoning`; Artificial Analysis labels a later serving revision “Grok 4.20 0309 v2,” so benchmark aliases are flagged below.
- **Provider / access:** xAI API with exact ID `grok-4.20-0309-reasoning`; Responses API is primary and Chat Completions is legacy. OpenCode supports direct xAI connections, but Grok 4.20 is absent from the current OpenCode Zen endpoint table.
- **Release / knowledge:** 2026-03-10 API release; system card dated 2026-04-07. Knowledge cutoff: no verified public date found.
- **IDs:** `xai/grok-4.20-0309-reasoning`; official aliases include `grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-reasoning-latest`, and `grok-4.20-0309`. No Free ID exists on the current OpenCode Zen list.
- **Context window:** 1,000,000 total tokens in current first-party xAI model and pricing documentation; input/output split is not published. Artificial Analysis reports 2M for its “0309 v2” entry, but the current first-party 1M limit is used for scoring.
- **Modalities:** Text and image input; text output; reasoning, function/tool calls, and structured/JSON output supported. No verified native audio, video, PDF input, or non-text output for this API model; PDFs can instead be mediated through file tools.
- **Pricing (as of 2026-09-25):** Below 200K prompt tokens: $1.25 input / $0.20 cached input / $2.50 output per 1M tokens. At or above 200K: $2.50 / $0.40 / $5.00. No free xAI API or OpenCode Zen tier was verified, so a free-tier privacy caveat is not applicable.
- **Architecture:** Proprietary, closed-weight model; total/active parameters, MoE structure, and license details beyond proprietary access are undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.2%** (BenchLM, verified Vals AI Terminal-Bench 2.1 run; rank not reported)
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.
  Reasoning / knowledge:
- GPQA Diamond: **88.6%** (BenchLM, verified Vals AI GPQA Diamond run; rank not reported)
- HLE: **35%** (Artificial Analysis v4.3.2 estimate for Grok 4.20 0309 v2 Reasoning; rank not reported)
- LCR / MLCR: **69%** (Artificial Analysis AA-LCR v1.1 estimate; rank not reported)
- CritPt: **7%** (Artificial Analysis v4.3.2 estimate; rank not reported)
- Artificial Analysis Intelligence Index / BenchLM overall: **26 / #28 of 673** (Artificial Analysis estimate; independent evaluation marked forthcoming) / **59.7/100 / #43 of 194** (BenchLM public score; coverage insufficient for a verified position)
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
  Coding:
- SWE-bench Verified / SWE-Pro: **76.7% / 51.8%** (BenchLM secondary-exact comparison-chart results; ranks not reported)
- LiveCodeBench: **84.3%** (BenchLM, verified Vals AI LiveCodeBench run; rank not reported)
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: **4.06%** (BenchLM, Vals AI Vibe Code Bench v1.1 exact result; rank not reported)
- DeepSWE / Coding Index / other: **23.8/100 / #106 of 135** (BenchLM mixed-source Coding category); no verified public DeepSWE score found.
  Long context:
- AA-LCR v1.1: **69%** (Artificial Analysis estimate; tested window length not disclosed); no MRCR, RULER, or GraphWalks result at a stated window was found.

### Normalized scores (1-100)

- **Tool use: 50/100.** Terminal-Bench 2.1 is 44.2%, and BenchLM places its Agentic category at 24.5/100 and #81/105; missing Tau3, GDPval-AA, and OSWorld-class results cap it near the bottom of the methodology’s mid band.
- **Reasoning: 82/100.** GPQA Diamond is strong at 88.6%, with HLE at 35% and AA-LCR at 69%; the 26-point AA Index and 7% CritPt result keep it below the 90–100 frontier tier.
- **Context window: 95/100.** Current first-party documentation verifies a 1M-token total window, meeting the 95–100 tier, but no ≥98% retrieval result at 512K or longer supports awarding 100.
- **Multimodal: 65/100.** It accepts text and images and returns text, with no verified native audio/video input or non-text output; this maps to the image-input-only 60–70 tier.
- **Coding: 78/100.** LiveCodeBench at 84.3% and secondary SWE-bench Verified at 76.7% indicate strong conventional coding, but Terminal-Bench 2.1 at 44.2%, Vibe Code Bench at 4.06%, and missing DeepSWE/SciCode results prevent a frontier score.
- **Cost efficiency: 90/100.** The evaluated short-context tier costs $1.25 input and $2.50 output per 1M tokens, placing it between the methodology’s approximately 92- and 88-point reference prices; rates double for prompts at or above 200K.
- **Overall Score: 74.0/100.** `(50 + 82 + 95 + 65 + 78) / 5 = 74.0`; best suited to economical long-context text/image reasoning and conventional coding, but not workloads where frontier terminal-agent reliability is the primary requirement.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-5.6-sol)** — 2026-09-25
- Method: fresh public internet research across xAI documentation and system card, Artificial Analysis, BenchLM, and OpenCode documentation; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
