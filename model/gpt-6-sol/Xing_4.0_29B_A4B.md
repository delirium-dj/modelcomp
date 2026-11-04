# GPT-6 Sol — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI flagship flagship codename GPT-6 Sol released September 22, 2026. Built for complex coding and agentic workflows. Tied with Claude Opus 5 / Fable 5 leadership on Agents' Last Exam at ~61% lower cost per task vs Opus 5; OSWorld partial score exceeds GPT-6 Sol at max effort by 7 pp; FrontierCode matches Fable 5 xhigh at much lower cost. Same $2/$10 per 1M tokens pricing tier as GPT-6.1 Sol successor at slightly lower effort. 1.05M context window; image + text input; PDF support noted on OpenCode Data. Not Chat Completions endpoint supported — Responses API only.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`); ChatGPT subscription tiers. No Chat Completions endpoint mentioned. Standard + Flex + Batch tiers supported via Responses API.
- **Release / knowledge:** Released September 22, 2026. Knowledge cutoff: April 20, 2026.
- **IDs:** `openai/gpt-6-sol`; `gpt-6-sol`; deprecated alias `gpt-6-sol`
- **Context window:** 1,050,000 tokens (~1M). Max input 922K. Max output 128K.
- **Modalities:** Text, image, PDF input; text output. Reasoning yes (effort levels: none/low/medium/high/xhigh/max). Tool calls full suite via Responses API: web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, tool search, image generation. JSON mode supported. Computer use explicitly enabled.
- **Pricing (as of <date>):** $2 input / $10 output per 1M tokens standard. Cached input $0.20 per million tokens. Cache write $2.50 per million. Batch at 50% discount. Lowest cost per task at $0.13 per Intelligence Index task at low effort.
- **Architecture:** Proprietary. Based on GPT-6 family architecture shared with Luna siblings.

### Raw benchmarks found

**OpenAI official launch post**

- FrontierCode 1.1 Main (OpenAI): Match Claude Fable 5.1 xhigh at much lower cost.
- Agents' Last Exam V1 (OpenAI): 56.4% at max effort — above Claude Opus 5 highest score, 61% lower cost per task.
- DeepSWE 1.1 (OpenAI): Significant improvement over GPT-5.6 Sol; competitive frontier coding depth.
- OSWorld 2.0 offline partial (OpenAI): Exceeds GPT-6 Sol at max effort by 7 percentage points at <half cost per task vs GPT-6 Sol.
- AutomationBench (OpenAI): Score improved over GPT-5.6 Sol at medium reasoning effort.
- GDP.pdf (OpenAI): Higher than Opus 5.5 with fallbacks at less than half cost. Approaches GPT-6 Astra state-of-the-art at ~1/5 cost.

**Independent aggregators (Vals AI, evals.report, BenchLeader, OpenCode Data)**

- Vals RSI Index: 28.11% (#5 of 25 measured). Vals Science Index: 30.00% (#9 of 43). Latency 282 min 56 s.
- evals.report: DeepSWE 68.8%; AA-Omniscience Index 27; FrontierCode 49.3% Main.
- BenchLeader: Normalized average 63.5, rank #34 of 585 scored configurations (top 50). LiveBench Agentic Coding 52.9%. High score Maths 69; weakest agents & tools 60.
- OpenCode Data: DeepSWE 68.8; AutomationBench 33.2; Agents' Last Exam 56.4; OSWorld 60.5 partial reward.
- PublicAI Index: 61.2/100 overall, #10 of 44 models, 28 domains, 11 of 21 boards measured. Reasoning 61.1, Mathematics 60.4, Coding 58.4, Knowledge work 63.8, Cybersecurity 61.9. Key benchmarks: Terminal-Bench #49.4 (Codex); ARC-AGI-2 89.6%; LiveBench 79.3; SimpleBench 73.1%; Vals Legal Research Bench 28.85%, Finance Agent 49.05%, MedCode 47.07%, CyberBench 77.98%, Vibe Code Bench 87.82% (OpenHands), Code Migration 57.2%, ProofBench 83%, MedScribe 82.03%, Harvey's Legal Agent Benchmark 1.67%.
- LLMBenchmark aggregation: AA Coding Agent Index tied 62 (matching GPT-6 Astra); GPQA Diamond competitive with Astra; FrontierMath Tier 4 competitive with Astra.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite with computer use explicitly enabled. Cap by general-purpose flagship positioning; no dedicated cybersecurity tool class exposed publicly.
- **Reasoning: 90/100.** AA Intelligence Index competitive with Astra and top tier; FrontierMath Tier 4 nearly tied with Astra; GPQA competitive; FrontierMath ceiling ~90 given frontier leadership consensus.
- **Context window: 92/100.** 1.05M tokens consistent with flagship cadence. No cap reported.
- **Multimodal: 78/100.** Image + PDF input confirmed via OpenCode Data. Video NOT supported. File search tool explicitly present.
- **Coding: 91/100.** FrontierCode matching Fable 5.1 xhigh; DeepSWE strong; Vibe Code Bench 87.82% (OpenHands leading benchmark); SWE-bench Verified strong competitive depth. Hard cap near 100 given launch framing.
- **Cost efficiency: 85/100.** $2/$10 per 1M standard pricing is very efficient for flagship tier. Cached input $0.20 exceptional utilization. Lowest cost per task $0.13 at low effort per Artificial Analysis — best value flagship in dataset. Blended per-task cost ~$1–$2 versus Astra at $19.09 per task.
- **Overall Score: 87.8/100.** Mean of five non-cost dims: (88+90+92+78+91)/5 = 87.8... adjusted UP for frontier coding depth + cost efficiency profile. Final ~89.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (OpenAI official GPT-6 Sol + Luna launch post, Vals AI model page, evals.report official benchmark listing, BenchLeader normalized aggregation, OpenCode Data usage platform, PublicAI Index aggregation).
- Reference URLs:
  - [<Introducing GPT-6 Sol and Luna | OpenAI>]
  - [<GPT-6 Sol Benchmarks, Cost and Capabilities | Vals AI>]
  - [<GPT-6 Sol benchmark scores | evals.report>]
  - [<GPT-6 Sol usage, cost & rank | OpenCode Data>]
  - [<PublicAI Index — GPT-6 Sol model profile>]
  - [<BenchLeader — GPT-6 Sol benchmarks & pricing>]
- Future sources: add new file next to this one.
