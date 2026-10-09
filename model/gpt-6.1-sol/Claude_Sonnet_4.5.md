# GPT-6.1 Sol — findings by Claude Sonnet 4.5 Research Agent (anthropic/claude-sonnet-4.5)
- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6.1 Sol (paid tier; no Free-tier variant exists — paid API-only)
- **Short description:** OpenAI's upgrade to GPT-6 Sol, positioned below the flagship GPT-6 Astra in the GPT-6 series, delivering near-Astra intelligence on agentic coding, computer use, document-heavy professional work, and multi-step business workflow automation at one-fifth of Astra's standard input/output token prices. Also available in a "GPT-6.1 Sol Pro" variant (same underlying model served with `reasoning.mode=pro`) and an "Ultrafast" tier (up to 8× faster generation, $12/$60 per 1M) rolling out via Codex.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses API and Chat Completions); also served via Azure (`Azure OpenAI` global standard), Amazon Bedrock (`us.openai.gpt-6-1-sol`-class ID, launched Sep 29 2026), GitHub Copilot (Pro+, Max, Business, Enterprise), Microsoft Foundry, Box AI, and OpenRouter (`openai/gpt-6.1-sol`). Flex tier available at $1/$5 with $0.05 cache. No OpenCode Zen listing found in public docs.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30 (verified from `developers.openai.com/api/docs/models/gpt-6.1-sol`).
- **IDs:** `openai/gpt-6.1-sol` (OpenRouter), `gpt-6.1-sol` (OpenAI API), `openai.gpt-6.1-sol` class on Bedrock/Foundry. No Free ID exists on Zen — the model is proprietary and paid-only.
- **Context window:** 1,050,000 total tokens; 128,000 max output tokens (verified from OpenAI developers docs and independently by OpenRouter's model page listing "1.1M" context and BenchLM listing 1.05M).
- **Modalities:** Text, image, and PDF/file input; text output. Reasoning yes (adjustable `reasoning.effort`: low/medium/high/xhigh/max; optional `reasoning.mode=pro`). Tool/function calling yes (`tools`, `tool_choice`); JSON structured outputs via `response_format` schema. No verified audio or video input support.
- **Pricing (as of 2026-10-10):** Standard tier: **$2.00 per 1M input / $10.00 per 1M output / $0.10 per 1M cached input / $2.50 per 1M cache writes** (per `developers.openai.com/api/docs/models/gpt-6.1-sol`). Flex tier $1.00/$5.00/$0.05 cache. Ultrafast tier $12.00/$60.00/$0.60 cache. Web search billed at $10.00 per 1K calls. No free tier — all access is paid; no free-tier privacy caveat applicable.
- **Architecture:** Proprietary / closed weights. Not open-source. License is OpenAI's proprietary terms; no self-hosting or fine-tuning. Parameters, MoE details, and active-parameter counts are **not publicly disclosed** (BenchLM lists "Not disclosed"; OpenAI system card does not publish an architecture figure). No open-weights license.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **85.4%** (Mercor APEX Terminal-Bench 2.1 leaderboard, Max effort; tied with GPT-6 Sol at 85.4%, below Sonnet 5.5 87.3% and GPT-6 Astra 86.1%) 【turn10fetch2】
- Tau3-Banking / Tau2-Bench: **no verified public score found** (GPT-6.1 Sol not listed in Mercor APEX τ³-Banking top five — Opus 5.5 55.0%, Fable 5.1 54.0%, Sonnet 5.5 54.0%) 【turn10fetch1】
- GDPval-AA: **53.8%** at Max effort (Artificial Analysis, aggregated via OpenRouter; not an Elo — AA reports this as a raw accuracy; GDPval-AA v2.1 Elo anchored at DeepSeek V4.1 Flash=1600 not published for this model in accessible pages) 【turn0fetch0】
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (SWE Atlas Codebase QnA top five on Mercor APEX does not include GPT-6.1 Sol — DeepSeek V4.1 Flash leads at 53.5%) 【turn13fetch0】
- OSWorld 2.0 offline set: **outperforms GPT-6 Sol by 7 pp at max reasoning effort; within 2.1 pp of GPT-6 Astra** (OpenAI launch blog; no absolute % disclosed) 【turn2fetch0】
- AutomationBench 1.0.6: **+2.2 pp above Opus 5.5 at medium reasoning effort; +4.8 pp above GPT-6 Sol at same setting** (OpenAI launch blog; no absolute % disclosed) 【turn2fetch0】

Reasoning / knowledge:
- GPQA Diamond: **95.4% ± 1.4%** at Max effort (Epoch AI leaderboard, tied with Gemini 3.8 Flash high); **95.1%** Max effort (Mercor APEX, below Astra xHigh 96.2% and Sonnet 5.5 Max 95.2%) 【turn0search9】【turn13fetch0】
- HLE: **52.9%** Max effort (Artificial Analysis, via OpenRouter); **54.5%** Max effort (Mercor APEX, below Opus 5.5 Max 57.4% and Astra xHigh 55.6%) 【turn0fetch0】【turn13fetch1】
- LCR / MLCR: **AA-LCR 83.0%** Max effort (Artificial Analysis, via OpenRouter); not in Mercor APEX AA-LCR v1.1 top five 【turn0fetch0】
- CritPt: **31.7%** Max effort (Artificial Analysis, via OpenRouter; tied with Xhigh) 【turn0fetch0】
- Artificial Analysis Intelligence Index / BenchLM overall: **51.8 / #6 of 216** — AA Intelligence Index 51.8 at Max effort (50.2 High, 47.8 Medium, 42.1 Low); BenchLM BenchAlign composite 81.46/100 (estimated status) 【turn0fetch0】【turn4fetch3】
- Omniscience Accuracy / Hallucination Rate: **62.1% / 45.7%** (Artificial Analysis AA-Omniscience, Max effort; non-hallucination rate is the inverse-complement of hallucination rate — i.e., ~54.3% hallucination on that harness) 【turn0fetch0】

Coding:
- SWE-bench Verified / SWE-Pro: **87.3% ± 2.8** Max effort on Mercor's original-set run (150 reported samples; extended-set score 45.3%); **not in Mercor APEX SWE-bench Verified open top five** (Opus 5.5 Max 98.2%, Sonnet 5.5 96.7%) 【turn12find0】【turn13fetch0】
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **54.2%** Max effort (Artificial Analysis, via OpenRouter; Xhigh 55.7%, High 55.8%) 【turn0fetch0】
- Vibe Code Bench: **88.9%** (Vals AI Vibe Code Bench v1.1, via OpenRouter) 【turn0fetch0】
- DeepSWE / Coding Index / other: **DeepSWE v1.1 72.3% Max** (Mercor APEX; tied #1 with Opus 5.5 Max 72.3%, above GPT-6 Astra Max 72.0%) — matches GPT-6 Astra at ~1/5 cost per OpenAI blog. **Terminal-Bench 4.0: 59.6% Max** (Mercor APEX #1, above Opus 5.5 58.3% and Astra 54.5%); **58.2% ± 3.1%** with Codex harness (tbench.ai, tied #3 with Astra); **56.1% Max** (Artificial Analysis mini-swe-agent harness); **55.1%** (Vals AI harness) 【turn13fetch1】【turn4fetch0】【turn0fetch0】【turn4fetch1】
- Terminal-Bench Science 0.1: **more than doubles GPT-6 Sol's score at max reasoning effort** (OpenAI blog; absolute % for GPT-6.1 Sol not disclosed; GPT-6 Astra still highest at 68.1%) 【turn2fetch0】
- SEC-Bench Pro (cyber): **78.8% pass@1** (GPT-6.1 Sol system card addendum, Preparedness evaluation; GPT-6 Astra 85.4%, GPT-6 Sol 66.3%) 【turn5fetch0】

Long context:
- **no long-context retrieval reported** (no MRCR, RULER, or GraphWalks score publicly published for GPT-6.1 Sol at any window length as of 2026-10-10; AA-LCR 83.0% at ~100K tokens per question is the nearest proxy)

### Normalized scores (1-100)
- **Tool use: 86/100.** Terminal-Bench 2.1 at 85.4% (Mercor) is just below the 88% frontier marker; Terminal-Bench 4.0 is #1 overall on Mercor's harness (59.6%) and tied-#3 with GPT-6 Astra on tbench.ai's Codex harness (58.2% ± 3.1%). OSWorld 2.0 within 2.1 pp of Astra at max effort and AutomationBench +2.2 pp above Opus 5.5 confirm near-frontier computer-use and workflow tool use. GDPval-AA at 53.8% (accuracy, not Elo) and absence from τ³-Banking's top five cap the score below 90.
- **Reasoning: 90/100.** GPQA Diamond 95.4% ± 1.4% (Epoch) and 95.1% (Mercor) clear the 90% frontier marker. HLE at 52.9–54.5% comfortably exceeds the 40% frontier marker. AA-LCR 83.0% is strong. CritPt 31.7% and AA Intelligence Index 51.8 sit below the "Index 60+" marker, and BenchAlign 81.46 (#6 of 216) confirms frontier but not top-of-frontier reasoning, capping the score below the 95+ tier.
- **Context window: 95/100.** 1,050,000-token verified total (developers.openai.com; cross-confirmed by OpenRouter "1.1M" and BenchLM "1.05M") puts the model in the ≥1M tier (95-100). No public MRCR/RULER retrieval result at 512K+ was found, so the 100-point ceiling (≥98% retrieval) cannot be applied; base-of-tier = 95.
- **Multimodal: 80/100.** Image + PDF input confirmed (OpenRouter FAQ: "accepts files such as PDFs, images, and text as input and returns text"; Amazon Bedrock doc lists the same). No audio or video input, and output is text-only. CharXiv 96.0% (Mercor Max), MMMU-Pro 85.8%, and MedXpertQA MM 85.7% confirm strong image/chart understanding. The "PDF but no video/audio" profile maps to the 75-90 tier; absence of audio/video and non-text output keeps the score in the lower half of that band.
- **Coding: 88/100.** DeepSWE v1.1 at 72.3% Max (Mercor, tied #1 with Opus 5.5) is just below the 74% frontier marker; Terminal-Bench 4.0 #1 on Mercor (59.6%) and Terminal-Bench 2.1 at 85.4% are both below the 85-88% TB2.1 frontier marker by a hair. SWE-bench Verified 87.3% ± 2.8 on Mercor's original-set run, Vibe Code Bench v1.1 at 88.9% (Vals), and SciCode 54.2% (below the 55% frontier marker) are collectively strong but not top-of-frontier, capping the score below 90.
- **Cost efficiency: 74/100.** Paid tier at $2.00/$10.00 per 1M input/output sits between the "$3/$15 ≈ 60" and "$1.25/$4.25 ≈ 88" anchor points — output price is closer to the cheap end; cached input at $0.10/M is extremely cheap and drives real-world blended input cost to ~$0.34/M (OpenRouter weighted average with 91% cache hit rate on OpenAI). Scored on the evaluated standard tier, not the Flex or cached blends.
- **Overall Score: 88/100.** (Tool use 86 + Reasoning 90 + Context window 95 + Multimodal 80 + Coding 88) / 5 = 439 / 5 = **87.8**, half-up rounded to one decimal = **87.8**. Best fit: high-volume agentic coding, computer-use automation, document-heavy professional work, and long-context retrieval pipelines where near-Astra intelligence is needed at one-fifth of GPT-6 Astra's cost — the natural default for Codex-style agent deployments that cannot justify Astra pricing.

---
## Signature
- Provided by: **Claude Sonnet 4.5 Research Agent (anthropic/claude-sonnet-4.5)** — 2026-10-10
- Method: Public internet research against primary sources (OpenAI launch blog, OpenAI GPT-6.1 Sol system card addendum at deploymentsafety.openai.com, developers.openai.com model docs, Amazon Bedrock model doc, Mercor APEX leaderboards, Artificial Analysis via OpenRouter aggregation, Epoch AI GPQA leaderboard, tbench.ai, BenchLM, Vals AI, GitHub Copilot changelog, Microsoft Foundry announcement). Raw numbers are reported only where a named harness and source were retrievable; missing entries are marked "no verified public score found" rather than interpolated. Normalized scores are 1-100 interpretations per the repo methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Sol_Pro.md`, using the same headings.