# DeepSeek-V3.2 — findings by GPT-6 Luna

- Source: DeepSeek AI (`DeepSeek-V3.2`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek's open-weight, reasoning-capable mixture-of-experts model for general chat, coding, and tool-using agents. The standard model supports thinking and non-thinking modes; this report does not conflate it with the separate, reasoning-only DeepSeek-V3.2-Speciale or the earlier V3.2-Exp checkpoint.
- **Provider / access:** As of this report date, Amazon Bedrock serves the exact model as `deepseek.v3.2` through Bedrock Runtime and Bedrock Mantle; AWS lists it as active, with EOL no sooner than 2026-12-01. The former DeepSeek OpenAI-compatible Chat Completions aliases were `deepseek-chat` (non-thinking) and `deepseek-reasoner` (thinking), but DeepSeek retired those aliases on 2026-07-24; they must not be treated as current V3.2 endpoints. The weights are also available for self-hosting. Bedrock advertises Chat Completions, Invoke, and Converse APIs, but only client-side tool calling (not server-side tool calling).
- **Release / knowledge:** Released 2025-12-01. Amazon Bedrock's model card lists a March 2025 knowledge cutoff; this is a provider-published model fact, not a guarantee that every third-party deployment has identical metadata.
- **IDs:** Hugging Face weights `deepseek-ai/DeepSeek-V3.2`; Amazon Bedrock `deepseek.v3.2`. Historical DeepSeek API IDs `deepseek-chat` / `deepseek-reasoner` are retired and no longer identify V3.2. No current OpenCode Zen Free ID was found.
- **Context window:** DeepSeek's technical report gives a 128K-token context; the retired first-party API documentation also specified 128K. Amazon Bedrock currently publishes 164K context and an 8K maximum output for its `deepseek.v3.2` endpoint. The provider-specific limits differ, so use the selected host's limit rather than assuming one universal API cap.
- **Modalities:** Text input and text output only. The standard model supports thinking and non-thinking modes and tool use; image, audio, and video input/output are not listed. Historical DeepSeek API supported JSON output and tool calls in both modes. On current Bedrock, structured output and client-side tool calling are supported; server-side tool calling is not.
- **Pricing (as of 2026-11-01):** Amazon Bedrock Standard in US East (N. Virginia / Ohio) and US West (Oregon): **$0.62/MTok input and $1.85/MTok output**; AWS lists $0.74/$2.22 for several other regions and $0.6386/$1.9055 in Sydney. No cached-input rate was listed on the Bedrock model card/pricing page. For historical context only, DeepSeek's first-party V3.2 API price card (archived 2026-04-23, before alias retirement) listed $0.28/MTok cache-miss input, $0.028 cache-hit input, and $0.42 output. That former first-party price is not a current V3.2 endpoint price. No OpenCode Zen Free ID was found.
- **Architecture:** Open-weight MoE with DeepSeek Sparse Attention (DSA); DeepSeek reports 671B total parameters and 37B activated per token. The Hugging Face repository licenses the model weights under MIT.

### Raw benchmarks found

> DeepSeek's December 2025 technical report distinguishes thinking from non-thinking on agent evaluations. Its main comparison table reports the standard V3.2 **thinking** mode; figures below are not results for V3.2-Speciale or V3.2-Exp. The paper states its broad evaluation used temperature 1.0 and a 128K context. Tool-agent figures are harness-dependent.

Agent / tool use:

- `τ²-Bench` Pass@1: **80.3% thinking / 77.2% non-thinking** (DeepSeek technical report, Appendix Table 9).
- MCP-Universe success rate: **45.9% thinking / 38.6% non-thinking**; MCP-Mark Pass@1: **38.0% / 26.5%**; Tool-Decathlon Pass@1: **35.2% / 25.6%** (thinking / non-thinking, same appendix table and paper evaluation).
- BrowseComp Pass@1: **51.4%**, or **67.6%** with the paper's context-management technique (DeepSeek technical report, Table 2; the paper marks the context-managed result separately).
- Tool use is supported, but no verified exact-model score was found for GDPval-AA or Claw-Eval in the primary sources checked.

Reasoning / knowledge (main table = thinking mode):

- MMLU-Pro: **85.0%** (EM); GPQA Diamond: **82.4%** (Pass@1); HLE: **25.1%** (Pass@1, text-only). The paper also reports **23.9%** on HLE when it additionally applied the official template; retain the distinction rather than treating the two prompts as interchangeable.
- AIME 2025: **93.1%** (Pass@1); HMMT Feb 2025: **92.5%**; HMMT Nov 2025: **90.2%**; IMOAnswerBench: **78.3%** (Pass@1), all in the same thinking-mode comparison table.
- Artificial Analysis Intelligence Index, CritPt, and long-context reasoning: **no verified primary-source score found** for this exact final checkpoint in the sources checked.

Coding:

- SWE-bench Verified: **73.1% resolved** in DeepSeek's internal agent framework; the paper reports robustness checks across Claude Code, RooCode, and non-thinking settings in the **72–74%** range. The separate non-thinking row in Appendix Table 9 is **72.1%**.
- Terminal Bench 2.0: **46.4%** with the Claude Code framework in the paper's thinking-mode table; the same paper reports **37.1%** non-thinking with Claude Code and **39.3%** non-thinking with Terminus. The authors note their thinking-mode context handling was incompatible with Terminus at publication.
- LiveCodeBench (2024.08–2025.04): **83.3%** (Pass@1-CoT); Codeforces: **2,386** (rating), both from the paper's thinking-mode table.
- SWE-Pro, SciCode, and Terminal-Bench 2.1: **no verified score found** for this exact model in the primary technical report.

Long context:

- Published limit is **128K** in DeepSeek's report (Bedrock separately publishes 164K). For the exact final V3.2 checkpoint, **no verified MRCR / RULER / GraphWalks retrieval-quality score found**. The paper's separate long-context comparison is on V3.2-Exp, so those results are not transferred here.

Multimodal:

- The model card identifies text input and text output only. MMMU / visual evaluation: **no verified public score found** for this text-only model.

### Normalized scores (1–100)

- **Tool use: 83/100.** Thinking-mode `τ²-Bench` is 80.3%, MCP-Universe is 45.9%, and BrowseComp reaches 67.6% with context management; the score is capped by the weaker non-thinking agent results and harness-specific Terminal Bench evidence.
- **Reasoning: 83/100.** Thinking-mode GPQA Diamond is 82.4%, MMLU-Pro 85.0%, and text-only HLE 25.1%; the score is capped below the highest tier by GPQA below 90%, HLE below 40%, and absent independent HLE/Intelligence Index confirmation.
- **Context window: 60/100.** The verified native/retired first-party limit is 128K, within the methodology's 100K–200K tier; Bedrock publishes 164K for its endpoint. Neither source establishes high retrieval accuracy at that length, and Bedrock caps output at 8K.
- **Multimodal: 15/100.** The model card specifies text-only input/output, so there is no verified image, audio, video, or non-text output capability.
- **Coding: 82/100.** Thinking-mode SWE-bench Verified is 73.1%, LiveCodeBench is 83.3%, and Terminal Bench 2.0 is 46.4%; the score is capped by the older Terminal Bench version, harness dependence, and missing SWE-Pro / SciCode evidence.
- **Cost efficiency: 92/100.** Current US Bedrock rates of $0.62/$1.85 per MTok are close to the methodology's roughly $0.60/$2.20 paid-value reference; the cheaper $0.28/$0.42 first-party rate is historical only, and no verified Zen Free ID exists.
- **Overall Score: 65/100.** Half-up mean of the five quality dimensions: (83 + 83 + 60 + 15 + 82) / 5 = 64.6 → 65; a strong text-only reasoning/coding agent for teams that can use Bedrock or self-host the MIT weights, but not for multimodal work.

---

## Signature

- Provided by: **GPT-6 Luna (`openai/gpt-6-luna-fast`)** — 2026-11-01
- Method: Independent public-web research using DeepSeek's release/API documentation, the DeepSeek-AI technical report and weight repository, current Amazon Bedrock model/pricing documentation, and separate benchmark catalogues for cross-checking. Scores are normalized 1–100 interpretations, not official vendor scores; benchmark mode, harness, provider limits, and source date are stated where material.
- Reference URLs:
  - [DeepSeek-V3.2 release announcement and official model links](https://api-docs.deepseek.com/news/news251201)
  - [DeepSeek-AI, DeepSeek-V3.2 technical report (arXiv:2512.02556)](https://arxiv.org/abs/2512.02556)
  - [Official DeepSeek-V3.2 model weights, card, and MIT license](https://huggingface.co/deepseek-ai/DeepSeek-V3.2)
  - [Amazon Bedrock DeepSeek V3.2 model card, provider limits, and model ID](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-deepseek-deepseek-v3-2.html)
  - [Amazon Bedrock pricing](https://aws.amazon.com/bedrock/pricing/)
  - [DeepSeek API change log: V3.2-era IDs and retirement notice](https://api-docs.deepseek.com/updates/)
  - [Archived DeepSeek API pricing page (2026-04-23 capture; historical V3.2 rates)](https://web.archive.org/web/20260423213625id_/https://api-docs.deepseek.com/quick_start/pricing)
  - [BenchLM DeepSeek-V3.2 benchmark index (third-party cross-check; variant coverage varies)](https://benchlm.ai/models/deepseek-v3-2)
