# Claude Opus 4.6 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Opus 4.6 (`anthropic/claude-opus-4.6`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship reasoning model released February 5, 2026, with thinking capabilities for complex multi-step tasks. First Opus-class model with 1M token context window (beta). State-of-the-art at launch on Terminal-Bench 2.0 (65.4%), BrowseComp (84.0%), GDPval-AA Elo (1606), τ2-bench Retail (91.9%), and HLE without tools (40.0%). SWE-bench Verified 80.8% maintains elite coding. ARC-AGI-2 68.8% nearly doubled predecessor (37.6%). GPQA Diamond 91.3% is strong. OSWorld 72.7% is excellent for computer use. BigLaw Bench 90.2% is highest for any Claude model. MCP Atlas 59.5% at high effort (62.7% at max) shows a regression from Opus 4.5. AA Intelligence Index 32 is surprisingly low. BenchLM overall score 86.0. Now 8 months old, superseded by Opus 4.7, 4.8, 5, and 5.5. Pricing at $5/$25 per 1M is premium.
- **Provider / access:** Anthropic API; Claude.ai; AWS Bedrock; Google Cloud Vertex AI. No free tier (noFreeId: true).
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-opus-4.6` (Anthropic API); `anthropic/claude-opus-4.6` (OpenRouter).
- **Context window:** 1,048,576 tokens (1M) in beta (premium pricing above 200K: $10/$37.50); 200K standard; 128K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $5/$25 per 1M in/out. Premium tier for >200K context: $10/$37.50 per 1M. Among the most expensive models in the dataset.

### Raw benchmarks found

Agent / tool use:

- τ2-bench Retail: **91.9%** (Anthropic — HIGHEST at launch)
- τ2-bench Telecom: **99.3%** (Anthropic)
- BrowseComp: **84.0%** (Anthropic — HIGHEST at launch; **86.8%** with multi-agent harness)
- OSWorld: **72.7%** (Anthropic — excellent computer use)
- Terminal-Bench 2.0: **65.4%** (Anthropic — HIGHEST at launch)
- GDPval-AA Elo: **1606** (Anthropic — highest at launch, +190 over Opus 4.5)
- Finance Agent: **60.7%** (Anthropic — best-in-class)
- MCP Atlas: **59.5%** at high effort (Anthropic — regression from Opus 4.5 62.3%); **62.7%** at max effort
- AA AutomationBench: varies by source
- Terminal-Bench 4.0: **41.2%** (high effort, lmcouncil.ai) / **51.9%** (thinking, Morph)

Coding:

- SWE-bench Verified: **80.8%** (Anthropic, averaged over 25 trials; **81.42%** with prompt modification)
- Terminal-Bench 2.0: **65.4%** (Anthropic)
- Terminal-Bench 4.0: **41.2%** (high) / **51.9%** (thinking)
- SWE-bench Pro: **53.4%** (BenchLM)
- SWE-bench Verified Hard: **~40%** (Reddit)
- BigLaw Bench: **90.2%** (Harvey — highest for any Claude model; 40% perfect scores)

Multimodal:

- MMMU Pro: **73.9%** without tools / **77.3%** with tools (Anthropic)
- OSWorld: **72.7%** (computer use / GUI automation)

Reasoning / knowledge:

- HLE (without tools): **40.0%** (Anthropic — highest at launch)
- HLE (with tools): **53.0%** (Anthropic)
- GPQA Diamond: **91.3%** (Anthropic)
- ARC-AGI-2: **68.8%** (Anthropic at max effort — nearly doubled Opus 4.5's 37.6%)
- MRCR v2 8-needle 1M: **76%** (Anthropic — strong long-context retrieval)
- MRCR v2 256K: **93%** (Anthropic)
- AA Intelligence Index: **32** (AA — surprisingly low)
- MMMLU: **91.1%** (Anthropic — strong multilingual)

### Normalized scores (1–100)

- **Tool use: 80/100.** τ2-bench Retail 91.9% and Telecom 99.3% are exceptional for tool orchestration. BrowseComp 84.0% (86.8% multi-agent) is the highest at launch for agentic search. OSWorld 72.7% is excellent for computer use. GDPval-AA Elo 1606 is the highest at launch. Finance Agent 60.7% is best-in-class. Terminal-Bench 2.0 65.4% was highest at launch. However, MCP Atlas 59.5% at high effort is a regression from Opus 4.5 (62.3%), and Terminal-Bench 4.0 41.2–51.9% is now behind newer models. The agentic profile was frontier at launch but has been surpassed by newer models on latest-gen benchmarks.
- **Reasoning: 70/100.** HLE 40.0% (without tools) was highest at launch; 53.0% with tools is strong. GPQA Diamond 91.3% is strong. ARC-AGI-2 68.8% was a massive leap (nearly doubled predecessor). MRCR v2 76% at 1M is strong for long-context retrieval. MMMLU 91.1% is solid. However, AA Intelligence Index 32 is surprisingly low — the lowest among models in this score range. The reasoning profile shows excellent per-benchmark results but the AA composite suggests inconsistency across their specific evaluation suite.
- **Context window: 85/100.** 1M tokens (beta, premium pricing) with 128K output. First Opus-class model with 1M context. MRCR v2 93% at 256K and 76% at 1M demonstrate excellent long-context retrieval. Standard 200K context at base pricing. Context compaction feature for long-running agents. The 1M window is a significant upgrade for Opus-class, though Gemini models have had 1M+ for longer.
- **Multimodal: 70/100.** MMMU-Pro 73.9% (77.3% with tools) is solid but trails GPT-5.2 (79.5%/80.4%) and Gemini 3 Pro (81.0%). OSWorld 72.7% demonstrates strong computer-use capability. Image input supported. No video or audio input. The multimodal profile is adequate but not leading — vision reasoning lags competitors.
- **Coding: 75/100.** SWE-bench Verified 80.8% is elite. Terminal-Bench 2.0 65.4% was highest at launch. BigLaw Bench 90.2% is exceptional for legal coding. SWE-bench Pro 53.4% is solid. However, Terminal-Bench 4.0 41.2% (high) / 51.9% (thinking) is now behind newer models. SWE-bench Verified Hard ~40% is moderate. The coding profile was frontier at launch but has been surpassed by 8+ months of newer releases.
- **Cost efficiency: 45/100.** $5/$25 per 1M is among the most expensive in the dataset. Premium pricing above 200K ($10/$37.50) makes long-context work extremely costly. No free tier. At 8 months old, the price-to-performance ratio has deteriorated as newer, cheaper models match or exceed its performance. For cost-sensitive workloads, this model is now hard to recommend over newer alternatives.
- **Overall Score: 76/100.** Mean of five quality dims: (80 + 70 + 85 + 70 + 75) / 5 = 76. Claude Opus 4.6 was Anthropic's flagship from February 2026. Key strengths: τ2-bench Retail 91.9% / Telecom 99.3% (exceptional tool orchestration), BrowseComp 84.0% (highest at launch), OSWorld 72.7% (excellent computer use), GDPval-AA Elo 1606 (highest at launch), SWE-bench Verified 80.8% (elite coding), ARC-AGI-2 68.8% (massive leap), HLE 40.0%/53.0% (frontier reasoning), 1M context window (first for Opus), BigLaw Bench 90.2% (highest Claude), Finance Agent 60.7% (best-in-class). Key weaknesses: AA Intelligence Index 32 (surprisingly low), MCP Atlas 59.5% (regression from Opus 4.5), Terminal-Bench 4.0 41.2–51.9% (behind newer models), $5/$25 pricing (among most expensive), premium pricing above 200K ($10/$37.50), 8 months old and superseded by Opus 4.7/4.8/5/5.5, no video/audio input, no free tier. Best fit for: teams already invested in Claude ecosystem wanting a proven flagship, long-context document analysis (1M window, 76% MRCR at 1M), agentic workflows needing strong tool orchestration (τ2-bench 91.9%/99.3%), legal/financial knowledge work (BigLaw 90.2%, Finance 60.7%), computer use automation (OSWorld 72.7%). Not ideal for: cost-sensitive workloads ($5/$25 is premium), teams needing latest-gen coding performance (superseded by newer Claudes), multimodal tasks requiring video/audio input, or tasks where AA Intelligence Index composite matters.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic official announcement, Vellum, Artificial Analysis, BenchLM, Morph, lmcouncil, SWE-bench leaderboards, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
