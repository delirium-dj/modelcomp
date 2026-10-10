# GPT-6.1 Sol — findings by Qwen3.8

- Source: OpenAI/`gpt-6.1-sol`
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (paid tier only — no Free tier; excluded from ChatGPT Free/Go and from Chat)
- **Short description:** OpenAI's mid-tier upgrade to GPT-6 Sol, positioned one step below flagship GPT-6 Astra, built for agentic coding, computer use and document-heavy professional work. Variant/alias flag: API snapshot `gpt-6.1-sol`; it replaced GPT-6 Sol in Codex after 7 days (2026-09-29), ships reasoning efforts `low`→`max` (no `none`/`minimal`), with an "Ultrafast" speed variant announced for the following days.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Responses API required for tool calling; Chat Completions supported _without_ tool calling) · OpenCode Zen `opencode/gpt-6.1-sol` (endpoint `https://opencode.ai/zen/v1/responses`, `@ai-sdk/openai`) · also listed on Azure OpenAI, Amazon Bedrock and Microsoft Foundry. Paid on every route.
- **Release / knowledge:** released 2026-09-29 (OpenAI DevDay; TechCrunch, DataCamp, BenchLM lineage); knowledge cutoff 2026-04-30 (OpenAI model docs).
- **IDs:** `openai/gpt-6.1-sol`, `opencode/gpt-6.1-sol` — explicitly **no Free ID exists on OpenCode Zen** (Zen lists it at paid $2.00/$10.00 per 1M).
- **Context window:** 1,050,000 tokens total / 128,000 max output — verified on OpenAI's official model page (`developers.openai.com/api/docs/models/gpt-6.1-sol`), corroborated by BenchLM spec sheet and OpenRouter FAQ; Artificial Analysis lists it as "1M". Pricing cliff: >272K input tokens billed 2x input/cache and 1.5x output for the whole request.
- **Modalities:** text + image in; text out; audio and video **not supported** (OpenAI model card); reasoning always on (`low`/`medium` default/`high`/`xhigh`/`max`); tool calls via Responses API (web search, file search, code interpreter, hosted shell, computer use, MCP, tool search); structured outputs / JSON mode supported; fine-tuning not supported.
- **Pricing (as of 2026-10-10):** paid — Input $2.00/M, cached input $0.10/M, cache writes $2.50/M, output $10.00/M (OpenAI); Fast mode 2x, Batch/Flex −50%, +10% regional premium. OpenCode Zen: $2.00/$10.00, cached read $0.20, cached write $2.50 (≤272K). No free tier → no free-tier data-use caveat; OpenAI offers US/EU data residency (Fast mode unavailable with EU residency).
- **Architecture:** proprietary, closed weights; parameters not disclosed by the provider (BenchLM spec sheet: "Not disclosed by the provider"; weights not published, no self-host).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (Vals AI TB2.1 leaderboard carries GPT-6 Astra 87.27% and GPT-6 Sol 83.15% under Terminus 2 but no GPT-6.1 Sol row; AA Index v4.3.2 has moved to Terminal-Bench 4.0: **56.1%** max / 51.5% high — Artificial Analysis)
- Tau3-Banking / Tau2-Bench: no verified public score found (AA Intelligence Index v4.3.2 replaced τ³-Banking with AutomationBench-AA: **64.9%** max / 64.5% high / 62.6% medium — Artificial Analysis)
- GDPval-AA: **1575 Elo** (GDPval-AA v2.1, max effort; 1486 high, 1433 medium, 1297 low — Artificial Analysis; = 53.8% at max per AA/OpenRouter)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (adjacent verified agentic rows: OSWorld 2.0 offline within 2.1 pts of GPT-6 Astra at max — OpenAI; AutomationBench 36.1% provider-exact — BenchLM; Terminal-Bench Science 0.1 57.0% — BenchLM/OpenAI)
  Reasoning / knowledge:
- GPQA Diamond: **95.4%** (±1.4, max effort — Epoch AI leaderboard; BenchLM/Mercor snapshot 95.10%)
- HLE: **52.9%** (max; 52.6% xhigh, 51.4% high — Artificial Analysis)
- LCR / MLCR: **83.0%** (AA-LCR v1.1, max; 82.3% high — Artificial Analysis)
- CritPt: **31.7%** (max — Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **51.8 / #6 of 216** (AA v4.3.2 max, AA rounds to 52, 50 at high, 48 at medium; BenchLM 81.36/100, evidence status "Estimated")
- Omniscience Accuracy / Hallucination Rate: **62.1% / 45.7%** (AA-Omniscience Accuracy and Non-Hallucination Rate, max — Artificial Analysis; 60.8% / 50.6% at high)
  Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found (BenchLM coding ledger shows "—" for both rows for GPT-6.1 Sol)
- LiveCodeBench: no verified public score found (BenchLM coding ledger: "—")
- SciCode / AA-SciCode: **54.2%** (max; 55.8% high, 55.7% xhigh — Artificial Analysis)
- Vibe Code Bench: no verified public score found (BenchLM coding ledger: "—")
- DeepSWE / Coding Index / other: **75.2%** DeepSWE v1.1 at high effort (OpenAI announcement; Astra 74.8%, GPT-6 Sol 68.8% max; BenchLM ledger records 71.9% provider-exact) · BenchLM weighted Coding 70.8%, #8 of 146
  Long context:
- No MRCR/RULER retrieval score published for GPT-6.1 Sol; closest verified long-context measure is AA-LCR v1.1 **83.0%** at max (Artificial Analysis). Verified window: 1,050,000 total / 128,000 output (OpenAI model docs), with the 2x billing cliff above 272K input tokens.

### Normalized scores (1-100)

- **Tool use: 88/100.** AutomationBench-AA 64.9% (max), GDPval-AA Elo 1575 (max), OSWorld 2.0 offline within 2.1 pts of Astra at max, Terminal-Bench 4.0 56.1% (max) — near-frontier agent behaviour. Capped below 90 because GDPval-AA 1575 sits under the 1750+ frontier bar and Terminal-Bench 2.1 / τ³-Banking have no verified GPT-6.1 Sol row (AA has retired both from its index).
- **Reasoning: 90/100.** GPQA Diamond 95.4% ±1.4 (Epoch, max), HLE 52.9% (AA, max), AA-LCR 83.0%, CritPt 31.7% — both stated frontier thresholds (GPQA 90%+, HLE 40%+) cleared with margin. Capped at the bottom of the frontier band because the AA Intelligence Index is 51.8 (max), below the 60+ frontier marker (that index is weighted toward GDPval/AA-Briefcase professional work rather than raw reasoning).
- **Context window: 96/100.** Verified total 1,050,000 tokens (OpenAI model docs; AA "1M") → ≥1M tier = 95-100. Held at 96, not 100, because no ≥98% MRCR/RULER retrieval at 512K+ is published for this exact ID; only AA-LCR v1.1 83.0% (long-context _reasoning_) is verified.
- **Multimodal: 65/100.** Text + image in, text out only; audio and video explicitly "Not supported" on the OpenAI card, no non-text output. Sits mid "+image in" band (60-70); PDF-style document work is benchmarked (GDP.pdf 31.0% max, AA) but the card still lists image input only, which caps it below the video/PDF-in tier.
- **Coding: 90/100.** DeepSWE v1.1 75.2% at high (OpenAI; above the 74%+ frontier bar and matching Astra at ~1/5 the cost) plus SciCode 55.8% high / 54.2% max (AA). Capped at the floor of the frontier band: SWE-bench Verified, LiveCodeBench and Vibe Code Bench have no verified public score for this ID, and Terminal-Bench 2.1 is unreported (TB4.0 56.1% max).
- **Cost efficiency: 75/100.** $2.00 in / $10.00 out with $0.10 cached input (OpenAI) lands between the ~$1.25/$4.25 (~88) and $3/$15 (~60) anchors; AA cost per task $0.72 (max) down to $0.21 (medium), and cache-hit price halved vs GPT-6 Sol ($0.20→$0.10). Paid-only (no Free ID on Zen), so not 100; scored independently and excluded from Overall.
- **Overall Score: 85.8/100.** (88 + 90 + 96 + 65 + 90) / 5 = 85.8 — best-fit pick: the price/performance default in the GPT-6 family for long-running agentic coding, computer use and PDF-heavy professional work where Astra's $10/$50 isn't justified; not the choice for audio/video-native workloads or for lowest-cost bulk traffic (use GPT-6 Luna tier).

---

## Signature

- Provided by: **Qwen3.8 (alibaba/qwen3.8)** — 2026-10-10
- Method: public internet research only (OpenAI announcement + official model docs, Artificial Analysis release comparison v4.3.2, OpenRouter/AA score table, Epoch AI, Vals AI, BenchLM, OpenCode Zen model docs, DataCamp/Vellum/TechCrunch coverage); every raw number carries its source and reasoning-effort/rank where published, and absent metrics are marked "no verified public score found"; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
