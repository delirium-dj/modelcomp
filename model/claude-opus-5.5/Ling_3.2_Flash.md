# Claude Opus 5.5 — findings by Ling 3.2 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (no Free-tier wording: paid API/hosted model only; no OpenCode Zen Free ID exists — Zen lists it as paid `opencode/claude-opus-5-5` at $4/$20). Alias/codename: `claude-wafer-eap` (internal, per Baidu Baike/快懂百科); Fast mode is a separate $8/$40 tier, same model.
- **Short description:** Anthropic's first Claude 5.5-family model and successor to Claude Opus 5, pitched for long-running agentic coding and knowledge work at Fable-5.1-level quality on most tasks for ~40% lower typical cost. Top use case: multi-hour autonomous coding agents and document-heavy enterprise analysis on a 1M-token context.
- **Provider / access:** Anthropic native API `claude-opus-5-5` (Messages API; adaptive thinking always on, `effort` param low/medium/high/xhigh/max, default medium; thinking cannot be disabled); Amazon Bedrock `anthropic.claude-opus-5-5` (+ regional variants, ZDR default), Google Cloud, Microsoft Azure, AWS Claude Platform, OpenCode Zen `opencode/claude-opus-5-5` (paid), Heroku Managed Inference. Anthropic-native = Messages API; OpenCode Zen and Heroku expose OpenAI-compatible Chat Completions; Zen's catalog also documents a `/responses` endpoint pattern.
- **Release / knowledge:** 2026-09-22 (Anthropic platform docs, AWS whats-new, models.dev); reliable knowledge + training-data cutoff 2026-06; retirement not sooner than 2027-09-22.
- **IDs:** `anthropic/claude-opus-5-5` (models.dev canonical, 48 providers); Claude API ID `claude-opus-5-5`; Bedrock `anthropic.claude-opus-5-5`; Zen `opencode/claude-opus-5-5`. No Free ID exists on Zen.
- **Context window:** 1,000,000 tokens total, max output 128K (300K on Message Batches API with beta header) — verified on Anthropic models overview, models.dev, Artificial Analysis model page, BenchLM record.
- **Modalities:** text + image in → text out; PDF input supported (Files API feature list); vision/computer-use yes; reasoning yes (adaptive, always on); tool calls yes; structured output yes; no audio/video input; JSON mode via structured output.
- **Pricing (as of 2026-11-08):** Paid $: input $4.00 / output $20.00 per 1M; cache read $0.20 (95% off input), cache write $5.00 (5-min TTL; 1h TTL write $8.00); batch $2.00/$10.00; Fast mode $8/$40; US-only inference 1.1x (Anthropic docs, opper, DataLearner, models.dev). No Free tier; privacy caveat: Bedrock/pay-as-you-go zero data retention and EU residency options, EU AI Act watermark, no-training-by-default on some routes (AWS/opper), but production safeguards can fall back to older models on restricted tasks.
- **Architecture:** Proprietary, closed weights; params total/active and MoE split not disclosed (models.dev "Closed"; DataLearner "Not reported").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (only Terminal-Bench 4.0 reported: 66.4% xhigh Anthropic launch table; 59.6% AA independent, level with GPT-6 Astra; 57.6% medium ≈$2.94/task Anthropic)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (GDPval-AA v2.1, Anthropic launch table + AA, #1; +111 vs Fable 5.1 1735, +138 vs Opus 5 1708)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** (Anthropic launch table, tool-augmented, max effort; DataLearner row 2/247; AA measures HLE 61.4% / HLE-Diamond 60.9% #2/6)
- LCR / MLCR: **AA-LCR 84.7%** (AZ Labs published-eval row, max setting, AA Index v4.3); MLCR **no verified public score found**
- CritPt: **no verified public score found** (AA says Opus 5.5 trails on CritPt v2 hard subset; no value surfaced)
- Artificial Analysis Intelligence Index / BenchLM overall: **58 / #1** (AA Intelligence Index, max effort, #1 at launch 2026-09-22; v5 2026-10-27 still 58, now #2 behind Gemini 4 Carbon 59; medium 48 on AA model page; AZ Labs v4.3.2 57.62/100 #1 of 211); BenchLM overall **85.4/100, #1 of 220** (public #1 of 220, verified #1 of 85; Agentic 89.0 #1/123, Coding 82.9 #2/148, Reasoning 86.1 #3/29, Multimodal 92.2 #3/54, Knowledge #1/180)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** for the split (AA-Omniscience v1.1 composite 48 at launch, AA via 163.com; later passed by Gemini 4 Carbon 54)
  Coding:
- SWE-bench Verified / SWE-Pro: **SWE-bench Verified: no verified public score found; SWE-bench Pro Public 89.9%** (BenchLM leaderboard #1 of 85, verified 2026-11-04; DataLearner max+tools #1/65)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **66.9%** (AA Index component, leading; DataLearner max #1/136)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE 74.2%** (DataLearner, max+tools, 8/108); AA Coding Agent Index 62, #1 (163.com citing AA); Terminal-Bench 4.0 66.4% xhigh (Anthropic); FrontierCode v1.1 54.4% / 54.6% medium (Cognition-run per aiwiki); CursorBench 4.0 57.8% (Cursor-run); SWE-bench Multilingual 93.9% #1/40; Code Arena WebDev Elo 1818 #1; SQBench 65.6 #1 (Max); SimpleBench 88.4% #1/99
  Long context:
- GraphWalks BFS 256K–1M: **66.8%** (BenchLM verified row; best verified Gemini 4 Argon 84.2%) — no MRCR/RULER value reported for this model ID

### Normalized scores (1-100)

- **Tool use: 85/100.** GDPval-AA v2.1 1846 Elo #1 clears the ~1750 frontier bar (AA/Anthropic); TB 4.0 66.4% xhigh Anthropic / 59.6% AA, OSWorld 2.0 81.8% computer use, AA counts AutomationBench-AA among its six wins. Capped by AutomationBench 40.0% behind GPT-6 Astra 41.4% (Zapier harness, no fallback) and no verified TB2.1/Tau3-Banking/Claw-Eval numbers.
- **Reasoning: 88/100.** HLE 67.7% tool-augmented (Anthropic launch table; 2/247 DataLearner) far above the 40% frontier bar; AA Index 58 #1 at launch, AA-LCR 84.7, ARC-AGI-1 98.5% high #1/249, FrontierMath v2 91.23 3/121 (DataLearner). Capped by Index 58 just under the 60 frontier line and no GPQA/CritPt/MLCR values.
- **Context window: 96/100.** Verified 1,000,000-token total (Anthropic models overview, models.dev, AA, BenchLM) → >=1M tier (95-100); held below 100 because the only retrieval proof is GraphWalks 66.8% at 256K-1M (BenchLM), not the >=98%@512K+ MRCR/RULER class; output cap 128K.
- **Multimodal: 78/100.** Image + text input, PDF input support, text-only output (Anthropic overview, opper feature list, Heroku docs); Chartography 89.0% (Anthropic, with tools) supports vision quality. No audio/video input and no non-text output → 75-90 band, lower-middle.
- **Coding: 88/100.** SWE-bench Pro 89.9% #1 (BenchLM verified, 85 models), DeepSWE 74.2% >= 74 frontier bar (DataLearner), SciCode 66.9% #1, AA Coding Agent Index 62 #1, TB 4.0 66.4% xhigh. Capped by no verified SWE-bench Verified/LiveCodeBench/Vibe Code Bench and TB below the 85% TB2.1 frontier bar.
- **Cost efficiency: 56/100.** List $4/$20 sits just above the $3/$15≈60 anchor on both axes; effective cost helped by cache read $0.20 (-60% vs Opus 5), batch $2/$10 and AA medium $2.45/task, but max effort inflates usage (~119k output tokens/Intelligence-Index task; AA ≈$12.99/task; AA Coding Agent Index $13.04/task). Scored independently, excluded from Overall.
- **Overall Score: 87.0/100.** (85 + 88 + 96 + 78 + 88) / 5 = 87.0, half-up at 1 decimal. Best fit: long-horizon agentic coding and enterprise knowledge work where deep reasoning, 1M context and tool robustness dominate; pick Sonnet 5.5 for narrow high-volume work or Fable 5.1 for hardest reasoning if budget allows.

---

## Signature

- Provided by: **Ling 3.2 Flash (anthropic/claude-opus-5-5)** — 2026-11-08
- Method: Fresh public internet research on 2026-11-08 (Anthropic platform docs + launch materials, Artificial Analysis Index v4/v5 and model pages, BenchLM, models.dev, OpenCode Zen/opencode.ai docs + console, DataLearner model aggregation, AWS whats-new, Heroku devcenter, The New Stack, Unite.AI, opper.ai, AZ Labs, SQBench/arena event coverage); every raw number carries source + rank/harness where available; missing items are written exactly as "no verified public score found"; normalized 1-100 scores are my interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Saved to `research/2026-11/Claude_Opus_5_5.md`; signed-log row appended to `model-findings.md`.
