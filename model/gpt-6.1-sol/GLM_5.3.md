# GPT-6.1 Sol — findings by GLM 5.3

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's proprietary reasoning model for complex coding, computer use, and professional work; positioned as near-GPT-6-Astra performance at lower cost. Top use case: long-horizon agentic coding/tool workloads on the Responses API.
- **Provider / access:** OpenAI API, model ID `gpt-6.1-sol` (Responses API for tool calling; Chat Completions supported without tool calling). Also served via 6 API providers (per Artificial Analysis).
- **Release / knowledge:** released 2026-09-29; knowledge cutoff 2026-04-30
- **IDs:** `openai/gpt-6.1-sol` (no Free ID found on OpenCode Zen as of 2026-10-01)
- **Context window:** 1,050,000 tokens total; 922,000 max input / 128,000 max output (verified on OpenAI model docs; Artificial Analysis lists 1M)
- **Modalities:** text + image in; text out; reasoning (efforts low/medium/high/xhigh/max); tool calls (web_search, file_search, code_interpreter, hosted_shell, computer_use, mcp, apply_patch, skills); structured outputs / JSON mode; prompt caching
- **Pricing (as of 2026-10-01):** $2 / 1M input; $10 / 1M output; cached input $0.10 (5%); cache writes $2.50; prompts >272K priced 2x in / 1.5x out; Fast mode 2x; Batch/Flex 50% lower. Paid only — no free tier.
- **Architecture:** proprietary; parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (closest proxy: AA Terminal-Bench 4.0 **56.1%**, BenchLM, harness v4.0 — provisional, not comparable to 2.1 numbers)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1575 Elo** (BenchLM; 53.8% normalized on the GDPval-AA v2.1 scale)
- AA-Briefcase v1.1: **1564 Elo** (BenchLM)
- AutomationBench-AA: **64.9%** (BenchLM; plain AutomationBench 36.1% on the non-AA harness)
- Terminal-Bench-Science 0.1: **57.0%** (BenchLM)
- ExploitGym: **35.1%** (BenchLM)
- GDP.pdf: **31.0%** (BenchLM, all-pass document benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **52.9%** (AA-HLE via BenchLM)
- LCR / MLCR: AA-LCR **83.0%**; MLCR-AA **33.9%** (BenchLM)
- CritPt: **31.7%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #11 of 223 in class** (AA, v4.3.2); BenchLM overall **66.47 / #25 of 636**
- Omniscience Accuracy / Hallucination Rate: **62.1% / 54.3%** (AA via BenchLM; Index 41.5)
- HealthBench family (knowledge proxy): raw **56.7%**, Professional **64.2%** (raw 67.2%), Hard **36.2%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **54.2%** (AA-SciCode, BenchLM)
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **71.9%** (BenchLM)

Long context:

- AA-LCR **83.0%** (BenchLM); no RULER / MRCR / GraphWalks value at 512K+ reported — 1.05M window verified by OpenAI docs but no measured long-context retrieval score found.

Multimodal (grounded):

- AA-MMMU-Pro: **86.0%** (BenchLM) — visual reasoning via image input.

### Normalized scores (1–100)

- **Tool use: 72/100.** GDPval-AA 1575 Elo approaches the ~1750 frontier and AA-AutomationBench 64.9% is strong, but AA Terminal-Bench 4.0 at 56.1% and ExploitGym 35.1% cap it below the TB ~85%+ frontier band; full Responses tool suite (computer_use, hosted_shell, mcp) verified on the official card.
- **Reasoning: 78/100.** AA-HLE 52.9% is top-tier and AA-LCR 83.0% is strong, but CritPt 31.7%, MLCR-AA 33.9%, and a high 54.3% hallucination rate on AA-Omniscience cap knowledge reliability well below the 90+ frontier.
- **Context window: 95/100.** 1.05M total (922K in / 128K out) verified on OpenAI's docs — ≥1M tier; no measured ≥98% retrieval at 512K+ published, so not 100.
- **Multimodal: 68/100.** Text + image input only (no audio/video/PDF-native input, text-only output); image quality is high (AA-MMMU-Pro 86.0%) — top of the image-in tier, capped by no video/audio or non-text output.
- **Coding: 86/100.** DeepSWE 71.9% and AA-SciCode 54.2% sit just under the 74%/55% frontier refs; capped by missing SWE-bench Verified / LiveCodeBench numbers on this exact ID.
- **Cost efficiency: 72/100.** $2/$10 per 1M (paid; between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 reference points); 95% cache discount, 50% Batch/Flex pricing, and AA's $0.72/task "reasonably priced" verdict lift it slightly.
- **Overall Score: 80/100.** (72 + 78 + 95 + 68 + 86) / 5 = 79.8 → 80. Best fit: long-context agentic coding and computer-use workloads where near-Astra quality at $2/$10 is the priority; pair with a faster/cheaper model for high-volume routing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (OpenAI model docs, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
