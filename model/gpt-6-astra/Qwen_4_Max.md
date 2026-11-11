# GPT-6 Astra — findings by Qwen 4 Max

- Source: OpenAI/gpt-6-astra
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's max-capability GPT-6 flagship ("the most intelligent and aligned model in the world" per launch), targeting long-horizon agentic work, computer use, coding and science. Distinct tier of the GPT-6 family — Sol ($2/$10) and Luna ($0.10/$0.50) are separate cheaper models, not aliases; GPT-6 Astra Pro is the ChatGPT-plan entitlement of the same model.
- **Provider / access:** OpenAI API `gpt-6-astra` (Responses, Chat Completions, Batch endpoints); ChatGPT Plus/Pro/Business/Enterprise; Codex; Azure; AWS Bedrock; OpenCode Zen `opencode/gpt-6-astra` and `openai/gpt-6-astra` (not on the OpenCode Go plan). Staged rollout from 2026-09-03 (Trusted Access Program enterprises first, API live by Sep 4).
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff 2026-04-30 (API model page).
- **IDs:** `openai/gpt-6-astra`, `opencode/gpt-6-astra`. No Free ID on Zen (paid only; not in the Go plan).
- **Context window:** 1,050,000 tokens total; 128,000 max output (OpenAI API model page, verified by DevelopersDigest 2026-09-28). Requests above 272K tokens bill 2x input/cache and 1.5x output ($20/$75 effective).
- **Modalities:** Text and image in; text out. Reasoning: yes — effort `low/medium/high/xhigh/max`. Tools: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search. Codex adds cross-window notes (experimental) and a 1.9x-faster computer-use harness vs GPT-5.6 Sol on Mind2Web (vendor claim).
- **Pricing (as of 2026-11-11):** $10.00 in / $50.00 out per 1M; cached input $1.00; cache writes $12.50; >272K-context surcharge ($20/$75); Fast mode up to 2x speed at 2x price. AA Coding Agent Index v1.5: Codex+Astra max effort $7.47 / 29.4 min per task (vs GPT-6 Sol $2.99 / 22.3 min, Claude Code Opus 5.5 $13.00 / 1.1 h).
- **Architecture:** Proprietary; parameters undisclosed. First OpenAI model rated **Critical for cybersecurity** under the Preparedness Framework: launch version refuses advanced offensive tasks (exploit PoCs); defensive access via Daybreak program; API safety checks can stop a task mid-run; production misalignment monitoring deployed (written reasoning harder to monitor than GPT-5.6 Sol's, per OpenAI).

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **59.3%** — SOTA (OpenAI launch table, max across efforts; vs GPT-5.6 Sol 53.6%, Opus 5 55.5%)
- OSWorld 2.0 (offline set): **72.6%** (OpenAI table; vs Sol 65.7%, Opus 5 70.2%); tasks finished ~40 min vs ~75 for Sol (vendor simulation)
- AutomationBench / ScreenSpot Pro: SOTA claimed at launch (OpenAI); AutomationBench **41.4%** in Anthropic's cross-table (Zapier public leaderboard)
- Terminal-Bench 4.0: **57.9%** (OpenAI table, high effort; ~63% lower cost/task than Fable 5.1 per OpenAI; trails Opus 5.5's 66.4%); AA independent run **59.1%** (NeuralTrust Oct snapshot)
- GDPval-AA v2.1: **1542 Elo** (OpenAI-reported via Anthropic's table; trails Opus 5.5 1846)
- DrivingBench: first model to complete the real-car course (DevelopersDigest)
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- ARC-AGI-3: **99.9%** (OpenAI; Responses API harness with two changed settings — footnote; vs Sol 7.8%, Opus 5 30.2%)
- FrontierMath Tier 4: SOTA claimed (OpenAI launch; numeric value in image table, not transcribed in sources read)
- HLE: **57.2%** with tools (OpenAI-reported via Anthropic's table; trails Opus 5.5 67.7%)
- AA Intelligence Index **v4.1.1**: **61.2** (OpenAI's own table; trails Fable 5.1 65.7 and Opus 5 63.1); later AA snapshot via NeuralTrust (Oct, version unstated): **52.7** — index versions are not comparable, both cited
- Hallucination rate **51%** / factual accuracy **63%** (The Decoder via NeuralTrust) — high recall, high fabrication
- GPQA Diamond / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI table; vs Sol 72.7%, Opus 5 73.7%, Fable 5.1 67.4%; trails Argon 77.9%)
- FrontierSWE v2: **65.5%** — leads the published cross-vendor table (Google's table via DataCamp; vs Opus 5.5 62.3%, Argon 55.0%)
- FrontierCode v1.1 Main: **53.3%** (OpenAI-reported via Anthropic's table; trails Opus 5.5 54.4%)
- AA Coding Agent Index **v1.4**: **67.0** (OpenAI table; slightly behind Opus 5's 68.1)
- CWE-bench v1: **68.0%** (ties Argon; Google table)
- SWE-bench Verified / LiveCodeBench: no verified public score found
- Terminal-Bench Science 0.1: **64.6%** — SOTA (OpenAI-reported via Anthropic's table); HealthBench Pro SOTA claimed

Long context:

- GraphWalks (256K–1M): **71.8%** (Google's cross-table via DataCamp; trails Argon 84.2%)
- 1.05M window with Codex cross-window notes; >272K tokens carry the 2x/1.5x billing surcharge

### Normalized scores (1–100)

- **Tool use: 95/100.** SOTA Agents' Last Exam (59.3%), AutomationBench and ScreenSpot Pro, OSWorld 72.6% with the fastest computer-use harness and the broadest hosted tool suite; capped by Terminal-Bench trailing Opus 5.5 and safety stops that can halt API tasks mid-run.
- **Reasoning: 92/100.** ARC-AGI-3 99.9% (harness-footnoted) and FrontierMath Tier 4 SOTA show ceiling reasoning; capped by HLE 57.2% (with tools) below Opus 5.5, AA v4.1.1 index behind Fable 5.1/Opus 5, and a 51% hallucination rate.
- **Context window: 97/100.** Class-leading 1.05M tokens with 128K output and cross-window memory in Codex; capped by GraphWalks 71.8% (below Argon) and the >272K double-billing surcharge that taxes full-window use.
- **Multimodal: 70/100.** Text + image in with SOTA ScreenSpot Pro GUI grounding; text out only; capped by no audio/video input and no image/audio output.
- **Coding: 93/100.** FrontierSWE v2 lead (65.5%), DeepSWE 74.1%, science-coding SOTA (TB-Science 64.6%) and $7.47/task Codex economics beat Opus 5.5's $13; capped by AA Coding Agent Index behind Opus 5 and Terminal-Bench/FrontierCode gaps.
- **Cost efficiency: 40/100.** $10/$50 is the priciest frontier tier (5x Argon intro, 2.5x Opus 5.5), with >272K surcharges and 2x Fast mode; partially redeemed by $1 cached input and genuinely fewer tokens per long task — a flagpole model, not a background one.
- **Overall Score: 89.4/100.** Mean of the five quality dims (95+92+97+70+93)/5 = 89.4. Best-fit: long, tool-heavy, expensive-to-get-wrong agent jobs (migrations, computer use, multi-hour Codex sessions) where removing retries and human time pays for the token premium.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (OpenAI announcement/API docs via community mirror and independent release guide + cross-vendor tables); scores are normalized 1–100 interpretations, not official vendor scores. AA index figures carry explicit version labels (v4.1.1 vs later unstated snapshot); ARC-AGI-3 harness footnote preserved.
- Reference URLs:
  - [Introducing GPT-6 Astra — OpenAI](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra API model page — OpenAI](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [GPT-6 Astra Release Guide — DevelopersDigest](https://www.developersdigest.tech/blog/gpt-6-astra-release-guide-2026)
  - [Introducing GPT-6-Astra (announcement mirror) — OpenAI Community](https://community.openai.com/t/introducing-gpt-6-astra-the-most-intelligent-and-aligned-model-in-the-world/1394703)
  - [Gemini 4 Argon benchmarks & security (cross-vendor tables) — NeuralTrust](https://neuraltrust.ai/blog/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.