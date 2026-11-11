# GPT-5.5 Pro — findings by Qwen 4 Max

- Source: OpenAI/gpt-5.5-pro
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The higher-accuracy variant of GPT-5.5 (Apr 23, 2026) — same underlying model with **parallel test-time compute** to "think harder and provide consistently better answers." Positioned for tough problems, not general prompting: requests may take several minutes (background mode recommended). Verified strengths are deep reasoning (FrontierMath v2 Tier-4 78.0%, ARC-AGI-2 84.2%, HLE 57.2 w-tools, GeneBench 33.2 vs base 25.0) at the dataset's most extreme price: $30/$180 with no cache discount.
- **Provider / access:** OpenAI **Responses API only** (no Chat Completions), Batch supported; ChatGPT Pro/Business/Enterprise tiers. Tools: function_calling, web_search, file_search, image_generation, code_interpreter, hosted_shell, mcp — notably **no computer_use, apply_patch, skills, or tool_search** (those live on the GPT-6.x line). Low rate limits (Build tier 500 RPM / 200K TPM). No fine-tuning, no Realtime.
- **Release / knowledge:** Released 2026-04-23; snapshot `gpt-5.5-pro-2026-04-23`; knowledge cutoff Dec 1, 2025. GPT-5.5 family Preparedness ratings (system card via Appwrite): Bio/Chem **High**, Cybersecurity **High** (below Critical; up from GPT-5.4), AI Self-Improvement below High.
- **IDs:** `gpt-5.5-pro` → `gpt-5.5-pro-2026-04-23`. Distinct from base `gpt-5.5` ($5/$30) and from GPT-5.4 Pro (same $30/$180 price, older model).
- **Context window:** 1,050,000 tokens; max output 128,000. No long-context surcharge documented on the model page (unlike the GPT-5.6/6.1 272K rule); Codex ships base GPT-5.5 at 400K. No Pro-specific long-context retrieval scores found.
- **Modalities:** Text + image in; text out (image_generation available as a tool). `reasoning.effort` medium / high (default) / xhigh. No audio/video.
- **Pricing (as of 2026-11-11):** **$30 in / $180 out per 1M — no cached-input discount**; regional/data-residency endpoints +10%. Batch/Flex at half rate ($15/$90 per Appwrite's family overview); Priority 2.5x. ~6x GPT-5.5 base, ~7x Opus 4.7's output rate, 3x+ GPT-6 Astra.
- **Architecture:** Proprietary, undisclosed; parallel test-time compute over the GPT-5.5 base model (per OpenAI's launch post via Appwrite). Weights not available.

### Raw benchmarks found

Pro-specific (vendor launch post via BenchLM's attributions + Appwrite's transcription; independent where noted):

- BrowseComp **90.1%** (vendor; base GPT-5.5: 84.4)
- HLE **57.2% w-tools / 43.1% no-tools** (vendor; base: 52.2 / 41.4)
- FrontierMath v2 Tiers 1–3 **87.7%**, **Tier 4 78.0%** (Epoch AI leaderboard — independent; legacy-version FrontierMath 52.4% vendor — different benchmark version, never mixed with v2)
- ARC-AGI-1 **95.0%**, ARC-AGI-2 **84.2%** (ARC Prize official leaderboard — independent)
- CritPt **30.6%** (AA leaderboard — independent; base GPT-5.5 xhigh: 27.1 in Moonshot's July card)
- GeneBench **33.2%** (vendor; base 25.0, GPT-5.4 Pro 25.6 — the clearest Pro-uplift datapoint)

Base GPT-5.5 context (same underlying model; NOT Pro measurements — vendor launch sweep vs GPT-5.4 / Opus 4.7 / Gemini 3.1 Pro, transcribed by Appwrite):

- Terminal-Bench 2.0 82.7 (Opus 4.7 69.4); TB2.1 83.4 (Moonshot's card, Codex harness); SWE-bench Verified 82.6 / SWE-bench Pro 58.6 (Opus 4.7 leads Pro at 64.3); OSWorld-Verified 78.7; Toolathlon 55.6; GDPval wins-or-ties 84.9% (Elo 1,769 in Anthropic's Fable 5 table); Tau2-Bench Telecom 98.0; GPQA-D 93.6; OfficeQA Pro 54.1; Expert-SWE (internal) 73.1; BixBench 80.5
- Moonshot's K3 card (GPT-5.5 xhigh column): DeepSWE 67.0, ProgramBench 70.8, FrontierSWE 64.9, SWE-Marathon 14.0, ALE 26.6, APEX 38.5, BrowseComp 84.4, MMMU-Pro 81.2/83.4, MathVision 92.2/96.8, CharXiv 84.1/89.0, ZeroBench 22/41
- Independent era checks: CyScenarioBench 26 (Epoch, base); SEAL SWE-bench Verified standardized 59.1 at xHigh (base, MorphLLM table); a Lean-verified off-diagonal Ramsey-number proof was produced by base GPT-5.5 (vendor claim)
- Appwrite's hands-on critique: UI generation still defaults to generic card grids; Opus 4.7 stronger for UI-first work
- BenchLM aggregate **72.44/100, #15 of 1020** — very thin Pro coverage (10 of 812 benchmarks), explicitly conservative

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 90.1 (Pro) is elite, and the base model's GDPval 84.9% wins-or-ties / OSWorld-V 78.7 carry over as a floor; capped by the reduced tool surface (no computer_use/apply_patch/skills), Responses-only access, multi-minute latencies, low rate limits, and no Pro-specific agentic Elo published.
- **Reasoning: 90/100.** The reason this variant exists: verified FrontierMath v2 Tier-4 78.0% and ARC-AGI-2 84.2%, HLE 57.2 w-tools, CritPt 30.6, GeneBench 33.2 (+8.2 over base); capped by HLE no-tools 43.1 (Opus 4.7 was 46.9 at launch) and by GPT-6.x successors now posting FrontierMath Tier-4 100% / ARC-AGI-2 94%+.
- **Context window: 90/100.** 1.05M window, 128K output, no documented long-context surcharge; capped by zero published Pro retrieval/long-context scores, no cache discount, and several-minute request times that make large-context interactive use impractical (background mode advised).
- **Multimodal: 72/100.** Text+image input with image_generation/code_interpreter tools; base-class MMMU-Pro ~81–83 and MathVision 96.8 w-Python are the only vision evidence (no Pro-specific runs); no audio/video input, and Appwrite's design critique caps practical visual output quality.
- **Coding: 84/100.** No Pro-specific coding benchmarks published; base-model floor is solid (SWE-V 82.6, TB2.0 82.7, TB2.1 83.4) but SWE-bench Pro 58.6 trails Opus 4.7's 64.3, SWE-Marathon 14.0 is weak, and the parallel-compute uplift is only demonstrated on science (GeneBench), not SWE tasks.
- **Cost efficiency: 22/100.** $30/$180 with **no cached-input discount** is the most expensive rate in the dataset — 6x base GPT-5.5, ~7x Opus 4.7 output, 3x+ Astra; Batch/Flex halves it to $15/$90, still extreme. Justifiable only for high-stakes single answers where a wrong result costs more than the tokens.
- **Overall Score: 84.4/100.** Mean of the five quality dims (86+90+90+72+84)/5 = 84.4. Best-fit: a precision instrument for hard science/math/reasoning one-shots (verified FrontierMath/ARC/GeneBench gains) — not an agent workhorse; for sustained coding/knowledge work the GPT-6.x Sol line and Opus 5.5 deliver more capability per dollar, and even base GPT-5.5 is the better value for most tasks.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (OpenAI's official model documentation, BenchLM's sourced Pro profile, llm-stats' rate card, and Appwrite's independent launch analysis transcribing OpenAI's benchmark sweep and system-card ratings); scores are normalized 1–100 interpretations, not official vendor scores. Pro-specific numbers (BrowseComp 90.1, HLE 57.2/43.1, FrontierMath v2 87.7/78.0, ARC 95.0/84.2, CritPt 30.6, GeneBench 33.2) are kept strictly separate from base GPT-5.5 figures, which are labelled as same-model context, not Pro measurements. Benchmark versions never mixed: legacy FrontierMath 52.4 vs v2 Tiers; TB2.0 vs TB2.1 vs TB4.x; HLE vendor w-tools vs AA-HLE (no Pro AA run found). ARC Prize and Epoch AI rows are independent; the launch sweep is vendor self-reported (Appwrite explicitly flags this). openai.com's launch post returns 403 — its Pro pricing line ($30/$180) was confirmed via search snippet and corroborated by the official docs page and OpenRouter's listing. Identity: GPT-5.5 Pro ≠ GPT-5.5 ≠ GPT-5.4 Pro (same price, different model). BenchLM's 72.44 aggregate reflects 10/812 coverage and is not treated as a capability ceiling.
- Reference URLs:
  - [GPT-5.5 Pro model documentation — OpenAI Developers](https://developers.openai.com/api/docs/models/gpt-5.5-pro)
  - [Introducing GPT-5.5 — OpenAI](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 Pro benchmark profile — BenchLM](https://benchlm.ai/models/gpt-5-5-pro)
  - [GPT-5.5 Pro Benchmarks, Pricing & Context Window — llm-stats](https://llm-stats.com/models/gpt-5.5-pro)
  - [GPT-5.5 is here: benchmarks, pricing, and what changes for developers — Appwrite](https://appwrite.io/blog/post/gpt-5-5-launch)
  - [GPT-5.5 Pro — OpenRouter](https://openrouter.ai/openai/gpt-5.5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.