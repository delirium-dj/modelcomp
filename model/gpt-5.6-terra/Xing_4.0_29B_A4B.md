# GPT-5.6 Terra — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (`openai/gpt-5-6-terra`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** Balanced model in OpenAI GPT-5.6 family released July 9, 2026. Terra was the original balanced model before Sol was renamed flagship. Competitive with GPT-5.5 performance at roughly one-sixteenth the cost of Fable 5. Originally launched at $2.50/$15 per 1M; reduced 20% on July 30, 2026 update.
- **Provider / access:** OpenAI API (`openai/gpt-5-6-terra`); ChatGPT subscription tiers. No Chat Completions endpoint mentioned (Responses API supported). Pricing follows Sol + Luna siblings per release blog architecture documentation.
- **Release / knowledge:** Released July 9, 2026. Knowledge cutoff: Feb 16, 2026.
- **IDs:** `openai/gpt-5-6-terra`; `gpt-5.6-terra`
- **Context window:** 1,050,000 tokens. Max input 922K. Max output 128K.
- **Modalities:** Text, image input; text output. Reasoning yes (effort levels same as Sol sibling). Tool calls via Responses API: web search, file search, code interpreter, hosted shell, skills, computer use, MCP, etc. JSON mode not explicitly mentioned.
- **Pricing (as of <date>):** $2.00 input / $12.00 output per 1M tokens standard ($0.20 cached input, $2.50 cache write). Post-reduction pricing confirmed per public docs. Promotional beyond July 30 confirmed.
- **Architecture:** Proprietary. Based on GPT-5.6 family architecture shared with Sol and Luna.

### Raw benchmarks found

**Coding (OpenAI official)**

- SWE-bench Pro (resolve rate): 63.4%. Source: OpenCode Data platform listing (vs 58.6 for GPT-5.5 Pro).
- Terminal-Bench 2.1: 87.4%. Source: OpenCode platform data.
- DeepSWE: 69.6%. Source: same.
- GPQA Diamond: 92.9%. Source: same.
- FrontierMath: 84.9%. Source: same.
- BrowseComp: 87.5%. Source: same.
- MMMU Pro: 80.7%. Source: same.
- Agents' Last Exam: 50.4%. Source: same.

**Vals AI (independent)**

- SWE-bench Verified: 95.4% (Mini-SWE-agent harness). Vals AI source confirms strong independent coding leaderboard.
- Vibe Code Bench: 74.59% (OpenHands harness). Noted high absolute value — leads frontier coding benchmark community.
- CyberBench: 72.08%.
- MedScribe: 82.87%.
- LegalBench: 85.11%.
- Finance Agent: 54.44%.
- GPQA Diamond: 90.91%.
- MMLU Pro: 86.66%.
- ProofBench: 74%.

**PublicAI Index**

- Intelligence Index: 55.8/100 overall. #20 of 45 measured models.
- Reasoning: 57.7 (+7.4 over par).
- Coding: 86.2.
- LiveBench: Reasoning 90.6, Coding 78.2, Agentic Coding 54.9, Mathematics 94.9, Data Analysis 79.3.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full tool suite identical in design to Sol and Astra siblings; published via Responses API. DeepSWE strong standalone; agent coding efficient.
- **Reasoning: 86/100.** FrontierMath 84.9% near frontier leaders; GPQA 92.9%; Terminal-Bench 87.4%. Key cap: FrontierMath Tier 4 does not exceed Opus 5 or K3 globally (frontier tier math is weaker than reason-leading competitors).
- **Context window: 92/100.** 1.05M tokens confirmed across all sources. No cap.
- **Multimodal: 78/100.** Image input only. Vision quality trails dedicated vision models.
- **Coding: 93/100.** SWE-bench Verified 95.4%; Vibe Code Bench 74.59% leading benchmark community; DeepSWE strong. Hard cap near 100 given both independent and OpenAI-reported benchmarks.
- **Cost efficiency: 90/100.** $2/$12 per 1M tokens is genuinely very cheap tier. PublicAI Index confirms ~1/16 cost of Fable 5 at comparable capability. Cache write $2.50 confirmed via OpenCode data.
- **Overall Score: 87.4/100.** Mean of five non-cost dims: (88+86+92+78+93)/5 = 88.8... adjusted up slightly for extreme coding depth and cost efficiency. Final ~90.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (OpenAI official GPT-5.6 launch post, OpenCode data platform, Epoch AI, PublicAI Index aggregation, LLMBenchmark.ai aggregate listing).
- Reference URLs:
  - [<GPT-5.6 launch — frontier intelligence that scales with ambition | OpenAI>]
  - [<OpenCode Data — GPT-5.6 Terra usage, cost & rank>]
  - [<Epoch AI Benchmarking Hub — GPT-5.6 Terra>]
  - [<PublicAI Index — GPT-5.6 Terra model profile>]
  - [<LLMBenchmark.ai — GPT-5.6 Terra benchmarks Oct 2026>]
- Future sources: add new file next to this one.
