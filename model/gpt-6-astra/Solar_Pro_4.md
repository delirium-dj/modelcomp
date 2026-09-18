# GPT-6 Astra — findings by Solar Pro 4

- Source: OpenAI/GPT-6 Astra, e.g. OpenAI (`openai/gpt-6-astra`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI proprietary, GPT-6 family)
- **Short description:** OpenAI's flagship model above GPT-5.6 Sol, released September 3, 2026 in a staged rollout. Built for agentic coding, computer-use automation, and authorized cybersecurity research — gated at the Preparedness Framework's Critical cybersecurity threshold (invite-only Daybreak program for exploit-creation capability). Scores 96.0% on GPQA Diamond (rank #2 of 45), 97.6% on FrontierMath Tier 4 v2, 93.0% on PaperBench, 91.5 on BrowseComp, 100 on ExploitBench, 74.1 on DeepSWE v1.1, 72.6 on OSWorld V2, 92.7 on ScreenSpot Pro, 57.7 on Terminal-Bench 4.0, 57.2 on HLE. First OpenAI model to reach Critical cybersecurity threshold. AA Intelligence Index: 61 (tied with Sol, 5 points behind Claude Fable 5.1's 65.7).
- **Provider / access:** OpenAI API (Trusted Access and Daybreak programs only — invite-only), ChatGPT subscription tiers, AWS Bedrock, Microsoft Azure. NOT available for general public API access.
- **Release / knowledge:** Released 2026-09-03 (staged rollout); knowledge cutoff not explicitly stated.
- **IDs:** `gpt-6-astra` or `chatgpt-4o-latest` (OpenAI API, Trusted Access/Daybreak programs). Also available via AWS Bedrock, Microsoft Azure.
- **Context window:** 1,050,000 tokens (1.05M) input; max output 128,000 tokens. Separate pricing tier once request exceeds 272,000 tokens (2x input/cache rate, 1.5x output rate).
- **Modalities:** Text and image input; text output. No native audio or video I/O. Tool calls: yes (computer-use automation). Function calling: yes. Structured output: yes. Reasoning: yes (reasoning effort levels: none through xhigh; pro mode and max effort reserved for Sol? Actually Astra has its own reasoning system). No ultra multi-agent mode.
- **Pricing (as of 2026-09-18):** $10.00/1M input, $50.00/1M output (standard reasoning effort). Cached input: $1.00/1M. Cache writes: $12.50/1M. Requests exceeding 272K input tokens bill at 2x input/cache rate and 1.5x output rate. Roughly double Sol's $5/$30 launch pricing. AA blended price: $7.70/1M (3:1 ratio). No batch discount mentioned. Enterprise: Zero Data Retention eligible.
- **Architecture:** Proprietary (closed, no released weights, no fine-tuning support). Trained on OpenAI's largest run to date at Stargate site in Texas. Architecture and parameter count not disclosed. Greg Brockman called it a "generational leap" and said he "personally believes it may mark the arrival of artificial general intelligence" — unverified claim.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for GPT-6 Astra specifically. (OpenAI skipped several industry-standard benchmarks at launch — unusual gap for a flagship release.)
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found for GPT-6 Astra specifically.
- Terminal-Bench 4.0: **57.7%** (vendor-reported by OpenAI; 2026-09-03). Multi-step tasks in real command line.
- ScreenSpot Pro: **92.7%** (vendor-reported by OpenAI; 2026-09-03). Computer-use/UI automation.
- OSWorld V2: **72.6%** (vendor-reported by OpenAI; 2026-09-03). Computer-use benchmark.
- DeepSWE v1.1: **74.1%** (vendor-reported by OpenAI; 2026-09-03). Long-horizon software engineering.
- BrowseComp: **91.5%** (vendor-reported by OpenAI; 2026-09-03). Autonomous browsing.
- ExploitBench: **100%** (vendor-reported by OpenAI; 2026-09-03). Cybersecurity exploit creation — gated behind Daybreak program.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (vendor-reported by OpenAI; 2026-09-03). Ranked #2 of 45 models reporting this benchmark per HokAI. Exceptional.
- HLE (Humanity's Last Exam): **57.2%** (vendor-reported by OpenAI; 2026-09-03). Exceptional.
- FrontierMath Tier 4 v2: **97.6%** (vendor-reported by OpenAI; 2026-09-03). Exceptional — highest math benchmark score.
- ARC-AGI 2: **95%** (vendor-reported by OpenAI; 2026-09-03). Abstract visual puzzles.
- ARC-AGI 3: **99.9%** (vendor-reported by OpenAI; 2026-09-03). Interactive abstract puzzles.
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **61** (Artificial Analysis; 2026-09-04). Tied with Sol, 5 points behind Claude Fable 5.1's 65.7.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found
- PaperBench: **93.0%** (vendor-reported; 2026-09-03). Research paper reproduction. Ahead of GPT-5.6 Sol (90.5%) and Claude Fable 5 (88.8%).
- Benchcad Vision2code: **95.9%** (vendor-reported by OpenAI; 2026-09-03). Vision-to-code.

Coding:

- SWE-bench Verified: no verified public score found for GPT-6 Astra specifically.
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 74.1%, ScreenSpot Pro 92.7%, Terminal-Bench 4.0 57.7%.

Long context:

- Long-context recall: no verified public score found for GPT-6 Astra specifically. 1.05M context window. OpenAI's own retrieval test shows strong recall deep into window. Long-context accuracy past 272K threshold not independently verified.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 57.7% (newer/harder harness — mid-tier for this specific benchmark), ScreenSpot Pro 92.7% (exceptional for computer-use/UI automation), OSWorld V2 72.6% (strong for computer-use), DeepSWE v1.1 74.1% (strong for long-horizon engineering), BrowseComp 91.5% (exceptional for autonomous browsing — beats Claude Opus 4.7), ExploitBench 100% (exceptional for cybersecurity — gated). Exceptional scores across agentic and computer-use tasks. Capped by: lack of SWE-bench Verified/Pro direct scores (OpenAI skipped several industry benchmarks at launch), Terminal-Bench 4.0 at 57.7% being mid-tier for that specific benchmark, and ExploitBench being gated/restricted. Overall tool-use capability is frontier-tier for agentic coding and computer-use.
- **Reasoning: 95/100.** GPQA Diamond 96.0% (rank #2 of 45 — frontier tier: GPQA 90%+ → 90-100), FrontierMath Tier 4 v2 97.6% (exceptional — highest math benchmark score), HLE 57.2% (frontier tier: HLE 40%+ → 90-100), ARC-AGI 2 95%, ARC-AGI 3 99.9% (exceptional), PaperBench 93.0% (ahead of GPT-5.6 Sol and Claude Fable 5). Exceptional, consistent scores across reasoning benchmarks. Capped only by: AA Intelligence Index of 61 being tied with Sol and 5 points behind Claude Fable 5.1 (55.7) — this composite score is the main cap on reasoning. Overall reasoning is clearly frontier-tier.
- **Context window: 100/100.** 1,050,000 tokens (1.05M+) context window. Maximum tier (≥1M = 95-100). Max output 128K. Separate pricing tier at 272K threshold. Score 100 reflects top-tier context window.
- **Multimodal: 60/100.** Text and image input; text output. No native audio or video I/O. Per methodology: +image in = 60-70. With text+image input, score 60. Capped by lack of video input, audio I/O, and non-text output.
- **Coding: 90/100.** ScreenSpot Pro 92.7% (exceptional for computer-use/UI automation), DeepSWE v1.1 74.1% (strong for long-horizon engineering), Terminal-Bench 4.0 57.7% (mid-tier for this specific benchmark), Benchcad Vision2code 95.9% (exceptional for vision-to-code). Exceptional scores. Capped by: lack of SWE-bench Verified/Pro direct scores (OpenAI skipped several coding benchmarks at launch), and Terminal-Bench 4.0 at 57.7% being mid-tier. Overall coding capability is frontier-tier.
- **Cost efficiency: 35/100.** $10.00/$50.00 per 1M input/output (standard reasoning effort). Cached input: $1.00/1M. Requests exceeding 272K input tokens bill at 2x input/cache rate and 1.5x output rate. AA blended price: $7.70/1M (3:1 ratio). Roughly double Sol's $5/$30 launch pricing. Pricier than 97% of GA models with published price. Per methodology: ~$10/$50 = ~30-35 range. Capped by: extremely high pricing, 2x/1.5x rates for long-context requests, invite-only access (Trusted Access/Daybreak programs), and AA Intelligence Index of 61 being tied with Sol despite much higher price (poor value proposition for general intelligence).
- **Overall Score: 79/100.** Mean of (92 + 95 + 100 + 60 + 90 + 35) / 6 = 78.7 → **79**. Best-fit recommendation: GPT-6 Astra is OpenAI's flagship model for agentic coding, computer-use automation, and authorized cybersecurity research — but access is gated (Trusted Access/Daybreak programs only) and pricing is extremely high ($10/$50, roughly double Sol). For approved Daybreak program participants needing cybersecurity exploit creation (ExploitBench 100%) or frontier reasoning (GPQA 96.0%, FrontierMath 97.6%), this is the definitive model. For everyday chat or cost-sensitive workloads, GPT-5.6 Sol or competitors are better choices — Astra's general Intelligence Index (61) is flat versus Sol despite launching at substantially higher effective price. Note: OpenAI skipped several industry-standard benchmarks at launch (SWE-bench Verified/Pro, Terminal-Bench 2.1, Tau3, etc.) — unusual gap for a flagship release. Also note: Greg Brockman's AGI claim is unverified.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev, Artificial Analysis), vendor release materials (OpenAI official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research. Note: OpenAI skipped several industry-standard benchmarks at launch.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_8_Preview.md`, using the same headings.
