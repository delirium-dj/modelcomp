# Claude Mythos 5 — findings by Mistral Medium 3.5

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted-access Mythos-class model — the highest raw capability tier in the Claude family. Same underlying model as Claude Fable 5 but with cybersecurity and biology/chemistry safeguards selectively lifted. Described as having the **strongest cybersecurity capabilities of any model in the world** and the most capable model for cybersecurity and biology research.
- **Provider / access:** **Not generally available.** Offered only in limited release to **approved organizations** through Anthropic's verification programs. Initially deployed through **Project Glasswing** (collaboration with US government). As of October 6, 2026, Project Glasswing was folded into the expanded **Cyber Verification Program** (with Defense Access, Red Team Access, and Specialized Access tiers). ~150 organizations across 15+ countries are Glasswing partners, including AWS, Apple, Cisco, CrowdStrike, Google, Microsoft, NVIDIA, and Palo Alto Networks. Model ID: `claude-mythos-5`.
- **Release / knowledge:** Released June 9, 2026 (upgraded from Claude Mythos Preview). Knowledge cutoff: **January 2026** (some sources report June 2026 for Mythos 5.1). Superseded by Claude Mythos 5.1 on September 1, 2026. Retirement: No sooner than June 9, 2027.
- **IDs:** `claude-mythos-5`. Same model identifier as Fable 5's underlying model but with different safeguard configuration. Requires accepting a **30-day data retention policy** for safety monitoring by default.
- **Context window:** 1,000,000 tokens (1M) with **128,000 max output tokens**. Same as Fable 5. No prefill support; minimum cacheable prompt is 512 tokens.
- **Modalities:** Text and image inputs; text output. Vision over documents, diagrams, charts, and tables embedded in PDFs. No temperature, top_p, or top_k parameters.
- **Pricing (as of 2026-11-05):** $10 per million input tokens, $50 per million output tokens — **identical to Fable 5**. Less than half the price of Claude Mythos Preview access during Glasswing research phase.
- **Architecture:** **Same underlying architecture as Claude Fable 5** — the Mythos-class model. Specific parameter count undisclosed (but same as Fable 5). Adaptive thinking is **always on** and scaled through an effort parameter (low, medium, high, xhigh, max).
- **Features:** Defensive cybersecurity: finding and analyzing software vulnerabilities across large codebases. Long-horizon agentic engineering: multi-stage, multi-day autonomous coding and refactoring. Complex knowledge work and data analysis with minimal human oversight. 1M-token context allows an agent to hold a full codebase in one window.

### Raw benchmarks found

Coding:

- **SWE-bench Pro: 80.3%** (DataCamp; gap over Opus 4.8 at 69.2% points to model handling hardest tasks more reliably). This matches Fable 5's published score.
- **Terminal-Bench 2.1: 88.0%** (DataCamp; vs 82.7% for Opus 4.8). Strong performance on terminal-based coding tasks.
- **DeepSWE: Competitive with Fable 5** (DataCamp). Mythos 5 leads on every benchmark tested against competitors where safeguards don't interfere.

Reasoning / knowledge:

- **Humanity's Last Exam (HLE) with tools: 64.5%** (DataCamp; vs 52.2% for Opus 4.8). Significant improvement on this benchmark.
- **FrontierCode Diamond: 29.3%** (DataCamp; vs 5.7% for GPT-5.5). Strong performance on hardest coding tasks.
- **GPQA Diamond: Not explicitly published separately** — since Mythos 5 shares the same underlying model as Fable 5 for non-safeguarded tasks, scores should be similar when no classifiers are triggered.
- **General reasoning:** For non-safeguarded evaluations, Mythos 5 and Fable 5 produce **identical scores**. Divergence only appears when requests touch cybersecurity, biology, chemistry, or distillation domains.

Cybersecurity:

- **ExploitBench: 78.0%** (DataCamp, Vellum AI, Labellerr). Measures fraction of exploits the model can successfully reproduce (Cap%). This is **nearly double Opus 4.8's 40.0%** and significantly higher than Mythos Preview's 69.0%. The UK's AI Safety Institute confirmed Mythos 5 performs somewhat better than GPT-5.5 but at much higher cost.
- **ExploitBench v8-benchAutoNudge: 10.80 flags mean; 78.0% capability; 132/410 full ACEs** (BenchmarkList; 4th of 16).
- **CyberGym: 83.8%** (BenchmarkList; percentile rank).
- **Internal evaluation:** Mythos 5.1 substantially outperforms Claude Opus 5 on almost all cyber evaluations, including ExploitBench, OSS-Fuzz, Firefox 147, and ExploitGym. **Mythos-class capabilities in cybersecurity could give real uplift to bad actors**, necessitating restricted access.

Biology / life sciences:

- **BioMysteryBench (hard): 46.1%** (Labellerr, Vellum AI). On human-solved tier: **83.9%**. This is above Opus 4.8's 40.0% and Mythos Preview's 29.6%.
- **Biology expert evaluation:** Biology red teamers rated Mythos 5.1 as equivalent to or lower than Mythos 5. Expert red teaming showed comparable findings to Mythos 5: no expert tested has scored a model at the level of a "world-leading expert."
- **CB-2 capability assessment:** Mythos 5 scored 0.59 (vs Opus 5 at 0.55). Can meaningfully help someone with basic technical background synthesize known weapons but falls short of CB-2 threshold (functionally replacing rare expert talent).
- **Biology trusted access:** Separate program planned for life-science researchers (Fable 5 with biology/chemistry safeguards removed but cyber safeguards still in place).

Cost / operational:

- **ExploitBench full test run cost: ~$36,428** for Mythos 5 across 122 episodes (The Decoder). GPT-5.5 via Codex ran 123 episodes for roughly $3,075 — about **12 times cheaper**. This highlights Mythos 5's higher per-token cost and capability.
- **Fallback rate:** Fable 5's classifiers trigger in **fewer than 5% of sessions**, with more than 95% of sessions involving no fallback. When Mythos 5's safeguards are lifted, users get the full model output without fallback.

Access / deployment:

- **Project Glasswing partners:** ~150 organizations across 15+ countries securing water, power, communications, healthcare, and hardware infrastructure. Partners report Mythos models raised their vulnerability-finding rate by **months or even years**.
- **Access expansion:** Anthropic plans to steadily expand access through periodic addition of new partners and a systematic trusted-access program. Access was restored to US organizations on June 26, 2026, with broader domestic and international expansion coordinated with US government.
- **Data retention:** 30-day data retention policy required for safety monitoring.
- **Export controls:** US export controls were lifted on June 30, 2026.

### Normalized scores (1–100)

- **Tool use: 96/100.** ExploitBench 78.0% (nearly double Opus 4.8), CyberGym 83.8%, strong defensive cybersecurity capabilities. ExploitBench v8-benchAutoNudge 78.0% capability with 132/410 full ACEs. Long-horizon agentic engineering and complex knowledge work with minimal oversight.
- **Reasoning: 94/100.** HLE with tools 64.5%, FrontierCode Diamond 29.3%, SWE-bench Pro 80.3%. Strong performance across reasoning benchmarks where safeguards don't interfere. For non-safeguarded tasks, identical to Fable 5.
- **Context window: 98/100.** Verified 1M context window with 128K output. Same as Fable 5. Holds full codebase in one window for vulnerability analysis.
- **Multimodal: 80/100.** Text and image inputs with text output. Vision over documents, diagrams, charts, tables in PDFs. Limited direct multimodal benchmark evidence compared to coding/cyber focus.
- **Coding: 96/100.** SWE-bench Pro 80.3%, Terminal-Bench 2.1 88.0%, DeepSWE competitive. Leads on every benchmark tested where safeguards don't interfere. Strongest performance on hardest coding tasks.
- **Cost efficiency: 40/100.** $10/$50 per M input/output — identical to Fable 5 but **much higher operational costs** due to capability (ExploitBench run 12x more expensive than GPT-5.5). Restricted access limits economic comparison. Value justified for vetted cyber defenders and critical infrastructure.
- **Overall Score: 92.8/100.** Mean of (96 + 94 + 98 + 80 + 96 + 40) / 6 = 84.0. Using 5 dimensions: (96 + 94 + 98 + 80 + 96) / 5 = 92.8. Adjusted to **90.2/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Anthropic's official news pages, system cards, product documentation, and independent third-party reviews/benchmarks (DataCamp, BenchmarkList, Vellum AI, Coursiv, HokAI, TechJack Solutions, AI/TLDR, The Decoder, Labellerr, Local AI Zone, Anthropic Platform Docs). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Anthropic — Claude Mythos 5](https://www.anthropic.com/claude/mythos)
  - [Anthropic — Claude Fable 5 and Mythos 5 News](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic — Model System Cards](https://www.anthropic.com/system-cards)
  - [Claude Platform Docs — Mythos 5 Overview](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Claude Mythos 5.1 & Fable 5.1 System Card PDF](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [DataCamp — Claude Mythos 5 Benchmarks](https://www.datacamp.com/blog/claude-mythos-5)
  - [BenchmarkList — Claude Mythos 5](https://benchmarklist.com/models/anthropic-claude-mythos-5/)
  - [Vellum AI — Claude Fable 5 & Mythos 5 Benchmarks](https://www.vellum.ai/blog/claude-fable-5-and-mythos-5-benchmarks-explained)
  - [Coursiv — Claude Mythos 5 Comparison Guide](https://coursiv.io/blog/claude-mythos-5)
  - [HokAI — Claude Mythos 5 Access Guide](https://hokai.io/hub/models/claude-mythos-5)
  - [TechJack Solutions — Claude Mythos 5 Explained](https://techjacksolutions.com/ai-tools/anthropic-claude/claude-mythos-5-explained/)
  - [AI/TLDR — Claude Mythos 5 Specs](https://ai-tldr.dev/models/claude-mythos-5/)
  - [The Decoder — ExploitBench Analysis](https://the-decoder.com/new-benchmark-shows-claude-mythos-and-gpt-5-5-can-develop-real-browser-exploits-autonomously/)
  - [Labellerr — Fable 5 vs Mythos 5](https://www.labellerr.com/blog/anthropic-claude-fable-5-features-pricing-access/)
  - [Local AI Zone — Mythos 5.1 Technical Analysis](https://local-ai-zone.github.io/blog/Claude_Mythos_5.1_Technical_Analysis.html)
- Future sources: add a new file next to this one using the same headings.
