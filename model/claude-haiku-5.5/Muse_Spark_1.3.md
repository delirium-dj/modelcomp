# Claude Haiku 5.5 — findings by Muse Spark 1.3

- Source: Anthropic (anthropic/claude-haiku-5-5)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest Claude 5.5-family small model (released 2026-10-07): first Haiku with adjustable effort, built for high-volume subagent, classification, extraction and routing work at up to 90% lower prices than Haiku 4.5.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), Amazon Bedrock (`anthropic.claude-haiku-5-5`), Google Cloud Vertex, Microsoft Foundry, Claude Platform on AWS; also Gavilanateri Bedrock launch-day availability. Messages API (Anthropic-native, not Chat Completions).
- **Release / knowledge:** 2026-10-07 release (Anthropic launch page + AWS Bedrock blog, verified); reliable knowledge / training cutoff Jun 2026 (Claude platform docs, verified)
- **IDs:** `claude-haiku-5-5` (Anthropic API); `anthropic.claude-haiku-5-5` (Bedrock); OpenCode Zen ID unconfirmed at research time
- **Context window:** 1,000,000 total tokens; 128,000 max output (Claude platform model overview, verified)
- **Modalities:** Text, image, PDF in; text out; adaptive thinking with adjustable effort (low→max, default medium) (platform docs + launch page, verified)
- **Pricing (as of 2026-10-07):** $0.10/$0.50 per 1M in/out for prompts ≤100K tokens; $0.50/$2.50 above 100K (cache reads $0.01/$0.05) (Anthropic pricing, verified) — ~75–90% below Haiku 4.5 on typical workloads; paid only
- **Architecture:** Proprietary (Anthropic Claude 5.5 family); weights private

### Raw benchmarks found

> All numbers vendor-reported (Anthropic Haiku 5.5 launch page, 2026-10-07) unless marked third-party. Peer columns (Haiku 4.5, GPT-6 Luna, Sonnet 5.5) come from the same launch table.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (launch table uses Terminal-Bench 4.0 instead — see Coding)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1620 GDPval-AA v2.1 Elo** (launch table; Haiku 4.5: 735, GPT-6 Luna: 1437, Sonnet 5.5: 1840); **1578 AA-Briefcase v1.1** (4.5: 614, Luna: 1336, Sonnet: 1824)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld 2.1 (offline subset): **72.4% partial / 37.1% strict pass** (launch table + kingy.ai computer-use table; 4.5: 15.7%, Luna: 48.9%/17.1%, Sonnet 5.5: 83.9%/48.8%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **45.9% no tools / 57.4% with tools** (launch table; 4.5: 10.2%/18.7%, Sonnet 5.5: 56.9%/64.5%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (launch-day model — no third-party index row yet)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **39.2% Terminal-Bench 4.0** (launch table; 4.5: 0.0%, Luna: 16.4%, Sonnet 5.5: 70.6%); **46.4% FrontierCode 1.1 Main (max effort)** (Luna: 42.4%, Sonnet 5.5 xhigh: 52.1%)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval score found; 1M window verified via spec only.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 72.4/37.1 plus GDPval 1620 (near the ~1750 frontier bar) show real computer-use chops; capped by no Tau3/Claw rows and a launch-day-only evidence base.
- **Reasoning: 84/100.** HLE 45.9/57.4 clears the 40 frontier bar and doubles Sonnet-class proximity on briefcase work; capped by zero verified GPQA Diamond numbers.
- **Context window: 95/100.** Full 1M + 128K output verified, a generational jump over Haiku 4.5's 200K; capped at 95 without measured 512K+ retention.
- **Multimodal: 78/100.** Text/image/PDF in with Chartography 46.4 (7x over Haiku 4.5's 6.4); capped by text-only output and no video/audio I/O.
- **Coding: 72/100.** TB4.0 39.2 and FrontierCode 46.4 beat GPT-6 Luna on both but trail Sonnet 5.5 badly (70.6/52.1); capped further by no SWE-bench or LiveCode rows — a subagent coder, not a flagship.
- **Cost efficiency: 98/100.** $0.10/$0.50 at ≤100K prompts is the cheapest Claude tier ever shipped; 5x step-up above 100K prompts keeps it one point off perfect.
- **Overall Score: 82/100.** Mean of the five quality dims (82+84+95+78+72)/5 = 82.2 → 82; best fit as the high-volume subagent/summarizer/computer-use tier — escalate to Sonnet 5.5 for complex agentic coding.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Anthropic Haiku 5.5 launch page, Claude platform model overview + pricing docs, AWS Bedrock launch blog, the-decoder/officechai/kingy.ai launch coverage with leaderboard cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
