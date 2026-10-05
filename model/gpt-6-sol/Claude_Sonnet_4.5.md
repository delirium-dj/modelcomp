# GPT-6 Sol — findings by Claude 4.5 (anthropic/claude-sonnet-4-5)

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

---

## Model card

- **Name:** GPT-6 Sol (paid API; no free-tier designation on OpenAI or OpenCode Zen)
- **Short description:** GPT-6 Sol is the cost-efficient high-end model in OpenAI's GPT-6 series, positioned below the flagship GPT-6 Astra and above the fast GPT-6 Luna tier. It is suited for demanding professional work, agentic coding, business workflow automation, and computer use, and is particularly strong at long-horizon software engineering tasks in real codebases. Note: superseded one week later by **GPT-6.1 Sol** (`gpt-6.1-sol`, released 2026-09-29); all scores in this file target the original `gpt-6-sol` checkpoint.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`); also available on Microsoft Azure and Amazon Bedrock as `gpt-6-sol`. Responses API support spans search, code execution, computer use, MCP, and other agent tools. Chat Completions API also supported. OpenCode Zen: no dedicated free-tier ID confirmed.
- **Release / knowledge:** GPT-6 Sol was released on September 22, 2026 by OpenAI. Knowledge cutoff: 20 April 2026 (per spec table).
- **IDs:** `openai/gpt-6-sol`. No Free ID exists on OpenCode Zen.
- **Context window:** GPT-6 Sol supports text and image input with text output, a 1,050,000-token context window (maximum input 922,000 tokens), and 128,000 output tokens. Verified via OpenAI docs, AWS Bedrock model card, and OpenRouter listing.
- **Modalities:** It accepts text and images and returns text, including code. Audio in: not supported. Video in: not supported. Default reasoning: Medium; low, high, xhigh, and max also supported. Tool calls: yes (Responses API). JSON mode / structured outputs: yes (JSON Schema). Reasoning model: yes (explicit effort levels).
- **Pricing (as of 2026-09-22):** GPT-6 Sol is priced at $2.00 per million input tokens and $10.00 per million output tokens ($4.00 / $15.00 for long-context requests). $0.200/M cached input. Paid only; standard OpenAI data-usage terms apply on free tiers of ChatGPT.
- **Architecture:** Proprietary transformer; parameter count not disclosed by OpenAI. Closed weights. GPT-6.1 Sol (and by extension GPT-6 Sol) uses the same types of data and training as GPT-6 Astra.

---

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 2.1: **83.15%** (vals.ai; #6 of 73 models)
- Tau3-Banking / Tau2-Bench (TAU-Bench): **69.4–70.4%** (Artificial Analysis, across providers: OpenAI 70.4%, Azure 69.3–69.4%, Azure US/EU 67.2–65.5%)
- GDPval-AA: **50.3%** (Artificial Analysis, GPT-6 Sol Max setting)
- AutomationBench 1.0.6: **33.2% (xhigh effort)** (Vellum; OpenAI published; outpacing Claude Opus 5 at 26.9% and Claude Fable 5.1 with fallback at 31.4%)
- Agents' Last Exam V1: **56.4% (max effort)** (OpenAI published, Vellum)
- OSWorld 2.0 (offline): **60.5% (xhigh effort)** (OpenAI published, Vellum)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

**Reasoning / knowledge:**
- GPQA Diamond: **92.1–92.5%** (Artificial Analysis, across providers: OpenAI 92.1%, Azure 92.2%, Azure US 92.4%, Azure EU 92.5%)
- HLE: **47.9% (max effort)** (Artificial Analysis, GPT-6 Sol Max)
- LCR / MLCR (AA-LCR): **83.7%** (Artificial Analysis, GPT-6 Sol Max)
- CritPt: **30.9%** (Artificial Analysis, GPT-6 Sol Max)
- Artificial Analysis Intelligence Index: **47–48 / rank not explicitly published** Independent testing via Artificial Analysis scores Sol at 48 on its Intelligence Index at max effort.
- BenchLM overall: **78.31/100, #7 of 211 models** (BenchLM BenchAlign leaderboard, September 2026)
- AA-Omniscience Accuracy: **54.5%** (Artificial Analysis, GPT-6 Sol Max)
- AA-Omniscience Non-Hallucination Rate: **39.9%** (Artificial Analysis, GPT-6 Sol Max)

**Coding:**
- SWE-bench Verified / SWE-Pro: no verified public score found for SWE-bench Verified specifically; SWE-Pro: no verified public score found
- DeepSWE v1.1: **68.8% (max effort)** (OpenAI published, Vellum; #2 at time of launch, within 1.1 pp of Claude Fable 5 at 69.9%)
- LiveCodeBench: no verified public score found for GPT-6 Sol specifically (note: GPT-5.6 Sol scored 82.6% per Vals AI; GPT-6 Sol figure not yet independently reproduced)
- SciCode / AA-SciCode: **57.6%** (Artificial Analysis, GPT-6 Sol Max)
- Vibe Code Bench: **87.82%** (vals.ai; #6 of 103 models)
- Terminal-Bench 2.1: **83.15%** (as above, also counts for coding; #6 of 73)
- FrontierCode 1.1 Main: **49.3% (max effort)** (OpenAI published)
- IOI: **82.61%** (vals.ai; #7 of 32)
- ProofBench v1.1: **83.00%** (vals.ai; #9 of 40)

**Long context:**
- Context window is 1.05M total: 922,000 max input, 128,000 max output. No MRCR, RULER, or GraphWalks long-context retrieval score publicly reported for GPT-6 Sol at time of research. No independent retrieval-accuracy figure (e.g. % recall at 512K) found.

---

### Normalized scores (1–100)

- **Tool use: 77/100.** TAU-Bench at ~70% is frontier-mid (above the Tau3 ~50% frontier threshold); AutomationBench 33.2% is well below the TB2.1 / Tau3 frontier ceiling (~54.8% best). Terminal-Bench 2.1 at 83.15% is near frontier (88%+ = 90–100). OSWorld 60.5% is solid mid-frontier. Averaged across these signals the model is strong but not tier-1 on tool use; capped below 80 by AutomationBench and OSWorld gaps vs. best-in-class.

- **Reasoning: 86/100.** GPQA Diamond at ~92% is above the 90%+ frontier threshold; HLE at 47.9% exceeds the 40%+ frontier tier. AA-LCR at 83.7% is strong. Capped below 90 by CritPt at 30.9% (lower-end mid) and AA Intelligence Index of 47–48 (below the frontier-60+ threshold), pulling the composite down.

- **Context window: 97/100.** 1,050,000 token context window places this in the ≥1M tier (95–100). Scored 97 rather than 100 because no independent MRCR/RULER retrieval-accuracy figure at 512K+ has been published; the 100-point ceiling requires verified ≥98% retrieval at 512K+ tokens, which cannot be confirmed.

- **Multimodal: 65/100.** GPT-6 Sol is multimodal and can accept both text and images as input. Audio in: not supported; video in: not supported; non-text output: not supported. Image-in only places this in the +image-in band (60–70). Scored 65 (midpoint of band) given no PDF/video/audio modality.

- **Coding: 84/100.** DeepSWE v1.1 at 68.8% is below the 74%+ frontier tier; Vibe Code Bench 87.82% (#6/103) and Terminal-Bench 2.1 83.15% (#6/73) are strong. SciCode 57.6% is above the 55%+ frontier mark. Capped below 90 primarily by DeepSWE gap vs. 74%+ frontier and no SWE-bench Verified figure.

- **Cost efficiency: 62/100.** $2 per million input tokens, $10 per million output tokens. At this price point ($2/$10) the methodology maps to approximately ~60–65 range (cf. $3/$15 ≈ 60; $1.25/$4.25 ≈ 88). Scored 62 for being slightly below the $3/$15 reference but with a meaningful long-context surcharge. Cost efficiency is scored independently and **not** counted in Overall.

- **Overall Score: 82/100.** Mean of (Tool use 77 + Reasoning 86 + Context window 97 + Multimodal 65 + Coding 84) / 5 = 409 / 5 = **81.8 → 82**. **Best-fit recommendation:** GPT-6 Sol is an excellent choice for agentic coding, professional document work, and long-context reasoning pipelines at roughly one-fifth the cost of GPT-6 Astra; developers prioritising peak tool-use or multimodal (audio/video) coverage should evaluate GPT-6 Astra or consider GPT-6.1 Sol (its direct successor at identical pricing with further performance gains).

---

## Signature

- Provided by: **Claude 4.5 (anthropic/claude-sonnet-4-5)** — 2026-10-04
- Method: Public internet research (TechCrunch, OpenAI official blog/system card, Artificial Analysis, vals.ai, BenchLM, OpenRouter, emergent.sh, Vellum, AWS Bedrock model card, llm-stats.com, felo.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Sol.md`, using the same headings.