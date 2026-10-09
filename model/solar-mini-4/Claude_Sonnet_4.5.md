# Solar Mini 4 — findings by Claude Sonnet 4.5

- Source: Upstage (`solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Solar Mini 4 is Upstage's compact, cost-efficient language model — a 35B-parameter mixture-of-experts with 3B active parameters and a 524K context window — built for agentic use cases where response speed and cost matter, with fluent Korean alongside strong English and Japanese.
- **Provider / access:** Upstage API (`solar-mini4`, `solar-mini4-260922`); OpenRouter (`upstage/solar-mini4`); on-premises deployment also available. Accessed via Chat Completions API (OpenAI-compatible endpoint at `https://api.upstage.ai/v1`). No verified Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-23; training knowledge cutoff February 2026.
- **IDs:** `upstage/solar-mini4` (OpenRouter); `solar-mini4` or `solar-mini4-260922` (Upstage native). No confirmed Free tier ID on OpenCode Zen / OpenCode Zen.
- **Context window:** 512K tokens input (524,288 exact), 128K tokens maximum output (131,072 exact). Verified via Upstage official blog, OpenRouter listing, and multiple third-party trackers (cloudprice.net, surfmind.ai).
- **Modalities:** Text input only; text output only; reasoning supported (efforts: none, minimal, low, medium, high, xhigh, max); tool calling supported; structured output / JSON mode supported. No image, audio, video, or PDF input. No non-text output.
- **Pricing (as of 2026-10-09):** Standard pricing is $0.10 per 1 million input tokens, $0.01 per 1 million cached input tokens, and $0.40 per 1 million output tokens (Upstage native API). OpenRouter lists $0.05 per million input tokens and $0.20 per million output tokens. A 50% launch discount runs through October 22. No free-tier API noted; Hermes Agent provides a time-limited free trial window. Standard API is paid; no stated privacy carve-out for free tier confirmed.
- **Architecture:** 35B total parameters, 3B active parameters per token (MoE sparse activation), setting a new Pareto-optimal point on Intelligence Index vs. active parameters for models under 3B active. Proprietary model; weights are not public.

---

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.1: no verified public score found. *(Terminal-Bench 4.0 score: **1%** — Artificial Analysis, via alphasignal.ai / artificialanalysis.ai)*
- Tau3-Banking / Tau2-Bench: **47.2** (Tau3-Banking — reported by Upstage, cited in aisuccesslabjuliangoldie.com)
- GDPval-AA: **1072 Elo** (Artificial Analysis, via artificialanalysis.ai)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. AutomationBench-AA: **22%** (Artificial Analysis, via artificialanalysis.ai)

**Reasoning / knowledge:**
- GPQA Diamond: no verified public score found
- HLE: **25.8%** (Artificial Analysis, via OpenRouter benchmark table)
- LCR / MLCR: **83%** on AA-LCR v1.1 (Artificial Analysis, via artificialanalysis.ai)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1** on Artificial Analysis Intelligence Index v4.3.2 — rank #139 per apxml.com, #129 per cloudprice.net Intelligence Index ranking
- Omniscience Accuracy / Hallucination Rate: **18% accuracy** on AA-Omniscience (score: -11); **64% non-hallucination rate** (Artificial Analysis, via alphasignal.ai)

**Coding:**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **48%** on SciCode (Artificial Analysis, via artificialanalysis.ai); **47.6%** listed on dataconomy.com (Artificial Analysis data)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Benchable.ai internal coding accuracy: **77%** (29th percentile); no DeepSWE verified score found

**Long context:**
- AA-LCR v1.1: **83%** — matching MiniMax-M3 and GPT-6 Luna (max), ahead of Gemini 3.8 Flash (high) and GPT-6 Astra (max) at 81% (Artificial Analysis). No MRCR or RULER retrieval scores reported.

---

### Normalized scores (1–100)

- **Tool use: 42/100.** Terminal-Bench 4.0 at 1% and AutomationBench-AA at 22% indicate very weak agentic coding; GDPval-AA of 1072 Elo and Tau3-Banking of 47.2 are mid-tier. TB score of 1% is far below mid-range threshold (45–60%) and well below frontier (88%+). GDPval of 1072 is below the mid-tier floor of ~1750. Score capped by near-zero Terminal-Bench result.

- **Reasoning: 52/100.** HLE at 25.8% is below the frontier threshold (40%+) but above the low mid-range (<10%), placing it in the lower-mid band. AA Intelligence Index of 24.1 is far below frontier (60+). No GPQA Diamond score verified. LCR at 83% is a relative strength but does not lift overall reasoning into a higher tier given weak composite intelligence index.

- **Context window: 84/100.** Context window is 524,288 tokens (512K per Upstage, 524K exact per third-party trackers). This falls within the 500K–1M tier (85–94), but no MRCR/RULER ≥98% retrieval data at 512K+ is confirmed, so score is assigned at the lower end of that band (84).

- **Multimodal: 15/100.** Input and output are text only. Text-only model → fixed score of 15 per methodology.

- **Coding: 38/100.** Terminal-Bench 4.0 at 1% is far below frontier (85%+) and mid-range thresholds. SciCode at 48% is below the frontier threshold (55%+). No SWE-bench Verified, DeepSWE, or LiveCodeBench scores found. Capped by near-zero agentic coding and absence of SWE-bench data.

- **Cost efficiency: 98/100.** OpenRouter pricing: $0.05 per million input and $0.20 per million output tokens — extremely low, in the ~$0.05/$0.20 range mapping to ≈98–99. Model places in the 88th percentile on competitive pricing across tracked models. Score: 98. *(Cost efficiency is scored independently and never counted in Overall.)*

- **Overall Score: 46/100.** Mean of five non-cost dims: (42 + 52 + 84 + 15 + 38) / 5 = 231 / 5 = **46.2 → 46**. Best-fit recommendation: Solar Mini 4 is purpose-built for high-throughput, cost-sensitive text automation and agentic pipelines where speed and low per-token cost matter more than frontier reasoning or coding capability; it should be paired with a stronger model for complex tasks.

---

## Signature

- Provided by: **Claude Sonnet 4.5 (anthropic/claude-sonnet-4-5)** — 2026-10-09
- Method: Fresh public internet research via web search across official Upstage blog, Artificial Analysis, OpenRouter, cloudprice.net, apxml.com, dataconomy.com, benchable.ai, surfmind.ai, alphasignal.ai, and myclaw.ai; scores are normalized 1–100 interpretations per the stated methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.