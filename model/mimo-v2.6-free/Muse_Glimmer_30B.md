# MiMo V2.6 Free — findings by Muse Glimmer 30B

- Source: Xiaomi MiMo / OpenCode Zen `opencode/mimo-v2.6-flash-free` (repo id `opencode/mimo-v2-6-free`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi’s MIT-licensed 309B-total/15B-active Flash MoE served via OpenCode Zen’s $0 free tier. Marketed as a high-frequency agentic coding option with full-modality input and 1M context on the native weights.
- **Provider / access:** OpenCode Zen only. OpenAI-compatible chat completions endpoint `https://opencode.ai/inference/openai/v1/chat/completions`. Config id `opencode/mimo-v2.6-flash-free` listed in OpenCode console docs; repo meta uses `opencode/mimo-v2-6-free`. Free tier is limited-time per OpenCode docs.
- **Release / knowledge:** MiMo-V2.6-Flash weights released 2026-09-22 per Xiaomi model page. Knowledge cutoff not published.
- **IDs:** `opencode/mimo-v2-6-free` / `opencode/mimo-v2.6-flash-free`. No separate Free ID on Zen beyond the listed model.
- **Context window:** 1,048,576 tokens total; 128K max output on native Xiaomi route per meta.json. Xiaomi model page lists Context Window 1M tokens / Max Output 128K tokens. Free serving caps are reported in repo meta as 200K/32K in prior research; native weights are used here per meta.
- **Modalities:** Text, image, video, audio in; text out. Reasoning yes; tool calls yes. Modalities confirmed by meta.json and Xiaomi spec page “Input Modality Text, Image, Video, Audio / Output Modality Text”.
- **Pricing (as of 2026-10-20):** Free Zen tier $0 in/out. Paid fallback on Xiaomi native route $0.14 input / $0.28 output per 1M tokens per meta.json. OpenCode pricing table lists MiMo-V2.6-Flash Free as Free / Free / Free. Limited-time promo; data may be used for improvement per OpenCode privacy notes.
- **Architecture:** Sparse MoE 309B total / 15B active, 681M vision encoder, audio tokenizer, MTP decoding per Xiaomi specs. MIT weights.

### Raw benchmarks found

> Verified public numbers are sparse for the free-route ID. The underlying MiMo-V2.6-Flash weights are cited in repo meta.

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- AutomationBench / OSWorld / Toolathlon: no verified public score found for the free ID
- GDPval-AA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AA Intelligence Index / BenchLM overall: no verified public score found

Coding:
- SWE-bench Verified: **92.0%** (repo meta short description: “SWE-bench Verified 92.0%”)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:
- MRCR / RULER / GraphWalks: no long-context retrieval reported for the free ID; native weights advertise 1M context.

### Normalized scores (1–100)

- **Tool use: 80/100.** No independent tool-use benchmarks found for the free ID. Underlying Flash weights are positioned for agentic coding with tool call support per Xiaomi specs; score reflects spec presence without verified harness numbers.
- **Reasoning: 74/100.** No verified GPQA/HLE/AA Index scores published for this ID. Reasoning capability is implied by MoE scale and multimodal design, capped by lack of public verification.
- **Context window: 94/100.** 1M total / 128K output native spec per meta.json and Xiaomi model page. Above 262K tier floor; capped at 94 by free-route serving uncertainties reported in prior research.
- **Multimodal: 92/100.** Full text/image/video/audio in; text out per meta.json and Xiaomi spec. Upper band with audio support; docked for limited free-route benchmark coverage.
- **Coding: 90/100.** SWE-bench Verified 92.0% cited in curated meta short. Strong agentic coding positioning; no independent SWE-Pro/LiveCodeBench verification for free ID, so capped below top frontier.
- **Cost efficiency: 100/100.** $0 in/out on OpenCode Zen free tier per OpenCode pricing table. Limited-time promo caveat noted.
- **Overall Score: 86/100.** Mean of five quality dims (80+74+94+92+90)/5 = 86.0. Best-fit: zero-cost multimodal coding agent with frontier context, pending independent verification of reasoning/tool harnesses.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; meta.json for basics; webfetch of OpenCode console docs and Xiaomi MiMo-V2.6-Flash model page for verified specs/pricing. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
